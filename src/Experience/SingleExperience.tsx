import React, { FC, memo, useEffect } from 'react';
import assets from './assets.json';
import './Experience.scss';

const getAsset = async (name: string, assets: AssetType[]) =>
  new Promise<AssetType | undefined>((resolve, reject) => {
    try {
      const asset = assets.find((asset) => asset.company === name) as
        | AssetType
        | undefined;
      resolve(asset);
    } catch (err) {
      reject(err);
    }
  });

type AssetType = {
  company: string;
  position: string;
  link: string;
  date: string;
  descriptions: string[];
  stack: string[];
};

type Props = {
  name: string;
};

const SingleExperience: FC<Props> = ({ name }) => {
  const [asset, setAsset] = React.useState<AssetType | undefined>(undefined);

  useEffect(() => {
    getAsset(name, assets).then((asset) => {
      setAsset(asset);
    });
  });

  if (!asset) return null;

  return (
    <article className='single-experience'>
      <h3>
        <a className='single-experience__link' href={asset.link}>
          {asset.company}
        </a>
      </h3>
      <h4>{asset.position}</h4>
      <p>{asset.date}</p>
      {asset.descriptions.map((description, index) => (
        <p key={asset.company + index}>{description}</p>
      ))}
      <p>
        Tech Stack: <b>{asset.stack.join(', ')}</b>
      </p>
    </article>
  );
};

export default memo(SingleExperience);
