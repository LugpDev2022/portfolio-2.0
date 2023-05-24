interface Props {
  children: React.ReactNode;
  className?: string;
  alternativeBackground?: boolean;
}

const AboutSectionContainer: React.FC<Props> = ({
  children,
  className = '',
  alternativeBackground,
}) => (
  <div
    className={`
      ${alternativeBackground ? `bg-${alternativeBackground}` : ''}
      ${className}
      flex
      flex-col
      gap-12
      items-center
      justify-center
      py-6
      sm:flex-row
    `}
  >
    {children}
  </div>
);

export default AboutSectionContainer;
