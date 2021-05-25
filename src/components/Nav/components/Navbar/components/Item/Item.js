import './Item.css';

const Item = ({
  active,
  href,
  onClick,
  children, 
}) => {
  let className = 'navbar__item';

  if (active) {
    className += ' navbar__item--active';
  }

  return (
    <a onClick={(event) => {
      event.preventDefault();
      onClick();
    }
    }
    className={className} href={href}>{children}</a>
  );
};

export default Item;
