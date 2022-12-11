import classes from './List.module.css';

const List = (props) => {
  return (
    props.items.map((item) => (
      <div className={classes.list} key={item.id}>
        <p>{item.title}</p>
        <button
          onClick={() => props.onRemoveItemHandler(item.id)}>
            Delete
        </button>
      </div>
    ))
  );
};

export default List;