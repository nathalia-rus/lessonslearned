import Octicon, { ThreeBars, Search } from "@githubprimer/octicons-react";

const Menu = () => (
  <div className=" wrapper pb4 ph4 pv3">
    <Octicon icon={ThreeBars} size="medium" color="black" />
    <div className="search">
      <div className=" f7 ttu tty lh-copy measure mr1"> search </div>
      <Octicon icon={Search} size="small" color="black" />
    </div>
    <style jsx>
      {`
        .wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        .search {
          display: flex;
          flex-direction: row;
          align-self: flex-end;
        }
      `}
    </style>
  </div>
);

export default Menu;
