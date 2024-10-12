import ThemeSwitcher from "src/components/common/theme-switcher";
import Icon from "src/components/common/icon";
import useCategory from "src/hooks/useCategory";

function Header() {
  const { category } = useCategory();

  const capitalized = category.charAt(0).toUpperCase() + category.substring(1);

  return (
    <header className="flex justify-between pt-6 pb-14 lg:pt-24 lg:pb-24">
      <div className="flex items-center gap-4">
        <Icon path={category} className="w-10" />
        <span className="heading-sm">{capitalized}</span>
      </div>
      <ThemeSwitcher />
    </header>
  );
}

Header.propTypes = {};

export default Header;
