import PropTypes from "prop-types";

export default function HeroStatement({

  children,

  className = "",

}) {

  return (

    <blockquote
      className={`
        max-w-4xl
        text-3xl
        md:text-5xl
        font-light
        italic
        leading-tight
        tracking-tight
        text-white
        ${className}
      `}
    >

      {children}

    </blockquote>

  );

}

HeroStatement.propTypes = {

  children: PropTypes.node.isRequired,

  className: PropTypes.string,

};