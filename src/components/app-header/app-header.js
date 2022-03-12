import "./app-header.css";

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header d-flex">
      <h1>Mher Hovhannisyan</h1>
      <h2>
        {allPosts} записей, из них понравилось {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
