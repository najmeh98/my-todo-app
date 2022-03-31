type Props = {
  horizontal?: number | string;
  vertical?: number | string;
};

export const Space = ({ horizontal, vertical }: Props) => {
  return <div style={{ width: horizontal, height: vertical }} />;
};
