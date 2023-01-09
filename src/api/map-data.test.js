/* eslint-disable no-undef */
describe("map-data", () => {
  it("should map data even if there is no data", () => {
    const pagesData = mapData();
    expect(pagesData.footerHtml).toBe("");
  });
});
