import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("every component story renders without a runtime exception", async ({
  page,
  request,
}) => {
  const response = await request.get("/index.json");
  const index = await response.json();
  const defaults = Object.values(index.entries).filter(
    (e: any) => e.type === "story" && e.name === "Default",
  ) as { id: string }[];
  expect(defaults.length).toBeGreaterThanOrEqual(81);
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const story of defaults) {
    await page.goto(`/iframe.html?id=${story.id}&viewMode=story`);
    await expect(
      page.locator("#storybook-root .pt-theme").first(),
    ).toBeVisible();
    await expect(page.locator(".sb-errordisplay")).not.toBeVisible();
  }
  expect(errors).toEqual([]);
});
test("Button controls change the real component and support dark theme", async ({
  page,
}) => {
  await page.goto(
    "/?path=/story/primitives-button--default&globals=theme:dark",
  );
  const preview = page.frameLocator("#storybook-preview-iframe");
  await expect(
    preview.getByRole("button", { name: "Create booking" }),
  ).toBeVisible();
  await page.locator("#control-variant").selectOption("danger");
  await page.locator("#control-size").selectOption("md");
  const button = preview.getByRole("button", { name: "Create booking" });
  await expect(button).toHaveClass(/pt-button--danger/);
  await expect(button).toHaveClass(/pt-button--md/);
  await expect(preview.locator(".pt-theme").first()).toHaveAttribute(
    "data-theme",
    "dark",
  );
  await page.screenshot({ path: "test-results/storybook-button-dark.png" });
  await page.goto("/?path=/docs/primitives-button--docs");
  await expect(page.locator("#storybook-preview-iframe")).toBeVisible();
  await page.screenshot({ path: "test-results/storybook-desktop.png" });
});
test("interactive stories have no automated accessibility violations", async ({
  page,
}) => {
  for (const id of [
    "primitives-button",
    "primitives-checkbox",
    "forms-validation-textfield",
    "forms-validation-combobox",
    "shell-navigation-tabbar",
  ]) {
    await page.goto(
      `/iframe.html?id=${id}--default&viewMode=story&globals=a11y.manual:!true`,
    );
    await expect(
      page.locator("#storybook-root .pt-theme").first(),
    ).toBeVisible();
    const results = await new AxeBuilder({ page })
      .include("#storybook-root")
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
  }
});
