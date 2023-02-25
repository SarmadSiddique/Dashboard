{Object.entries(localStorage).map(([key, valueJSON]) => {
  const value = JSON.parse(valueJSON);

   return (
     <div style={style.gridItemsContainer}>
       <p>{value}</p>
       <p>{value.name}</p>
       <p>{value.name}</p>
       <p>{value.name}</p>
       <p>{value.name}</p>
       <input checked={value.active} type="checkbox"></input>
       <Link to={'/products/' + key}>VIEW</Link>
       <Link to={'/products/' + key + '/edit'}>EDIT</Link>
       <button>DELETE</button>
     </div>
   );
 })}