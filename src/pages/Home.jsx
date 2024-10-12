import NavigationItem from "src/components/common/navigation-item";

const pages = [
  {
    path: "HTML",
    label: "HTML",
  },
  {
    path: "CSS",
    label: "CSS",
  },
  {
    path: "JavaScript",
    label: "Javascript",
  },
  {
    path: "Accessibility",
    label: "Accessibility",
  },
];

function Home() {
  return (
    <div className="xl:flex gap-32">
      <div className="xl:max-w-[45ch]">
        <h1 className="heading-lg font-light lg:pb-12">
          Welcome to the <strong className="font-medium">Frontend Quiz!</strong>
        </h1>
        <span className="body-text italic inline-block pb-10">Pick a subject to get started.</span>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {pages.map((page) => (
          <NavigationItem key={page.path} path={page.path} label={page.label} />
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
