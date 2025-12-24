import { ComponentType } from "react";

const SectionWrapper = <P extends object>(
  Component: ComponentType<P>,
  idName?: string
) =>
  function HOC(props: P) {
    return (
      <section
        id={idName}
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <Component {...props} />
      </section>
    );
  };

export { SectionWrapper };
