interface SeperatorProps {
  height?: string;
  width?: string;
  className?: string;
}

export default function Seperator(props: SeperatorProps) {
  let { height, width, className } = props;

  if (!height) height = '0';
  if (!width) width = '0';

  return (
    <div
      className={className ? className : ''}
      style={{
        height: height,
        width: width,
      }}
    />
  );
}
