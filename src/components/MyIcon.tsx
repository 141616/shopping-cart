interface MyIconProps {
  name: string;
  size?: number;
}

const MyIcon = (props: MyIconProps) => {
  return (
    <svg data-testid="icon" style={{ width: props.size || 16, height: props.size || 16 }} className="icon" aria-hidden="true">
      <use xlinkHref={`#icon-${props.name}`}></use>
    </svg>
  );
}

export default MyIcon;