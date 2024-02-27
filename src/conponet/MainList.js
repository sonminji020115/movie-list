import MainItem from "./MainItem.js";

const MainList = ({dummy, category}) => {

  const filterDummy = 
  category === 'all' 
  ? dummy 
  : dummy.filter((it) => (it.cate === category));

    return (
      <div className="MainList">

          {filterDummy.map((it) => (
              <MainItem key={it.id} {...it} />
          ))}
    </div>
    );
  }

export default MainList;