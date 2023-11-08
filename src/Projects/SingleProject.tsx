import React, { FC, memo } from 'react';
import './Projects.scss';

type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const SingleProject: FC<Props> = ({ description, image, title, link }) => {
  return (
    <div className='single-project'>
      <div className='single-project__image'>
        <a href={link} target='blank'>
          <img src={image} alt={title} />
        </a>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default memo(SingleProject);
