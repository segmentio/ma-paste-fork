export const basicExample = `
const BasicInPageNavigation = () => {

  return (
    <InPageNavigation aria-label="get started">
      <InPageNavigationItem href="#" currentPage>
        Super SIM
      </InPageNavigationItem>
      <InPageNavigationItem href="#">Programmable Wireless</InPageNavigationItem>
    </InPageNavigation>
  );
};

render(
  <BasicInPageNavigation />
)
`.trim();

export const fullWidthExample = `
const FullWidthInPageNavigation = () => {

  return (
    <InPageNavigation aria-label="privacy" variant="fullWidth">
      <InPageNavigationItem href="#" currentPage>
        Home
      </InPageNavigationItem>
      <InPageNavigationItem href="#">Detection</InPageNavigationItem>
      <InPageNavigationItem href="#">Settings</InPageNavigationItem>
    </InPageNavigation>
  );
};

render(
  <FullWidthInPageNavigation />
)
`.trim();
