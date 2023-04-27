import React from 'react';

interface ISelectProps {
  selectText: string;
  value: string | undefined | string[];
  onChangeValue: (value: string) => void;
  options: string[];
}

export default function Select(props: ISelectProps) {
  function changeValue(e: React.ChangeEvent<HTMLSelectElement>) {
    if (props.onChangeValue) {
      props.onChangeValue(e.currentTarget.value);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center m-3">
      <label htmlFor="anos" className=" text-lg m-2">
        {props.selectText}
      </label>
      <select id="anos" className="text-black px-2" onChange={changeValue} value={props.value}>
        {props.options.map((option: string, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
