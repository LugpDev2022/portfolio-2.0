interface Props {
  children: React.ReactNode;
  className?: string;
  background?: string;
  orientation?: 'left' | 'right';
}

const AboutSectionContainer: React.FC<Props> = ({
  children,
  className = '',
  background,
  orientation = 'left',
}) => (
  <div
    className={`
      ${className}
      ${background ? `bg-[${background}]` : ''}
      ${orientation === 'left' ? 'sm:text-left' : 'sm:text-right'}
      flex
      flex-col
      gap-5
      items-center
      justify-between
      p-5
      py-6
      sm:flex-row
      sm:px-10
      sm:py-12
      md:px-14
      lg:px-24
      xl:px-36
      2xl:justify-center
      2xl:gap-20
      text-center
      text-xl
    `}
  >
    {children}
  </div>
);

export default AboutSectionContainer;
