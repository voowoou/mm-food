'use client';

import { Field } from 'formik';
import { useState } from 'react';
import styles from './Filter.module.sass';

interface Props {
  filter: {
    id: string; // Идентификатор, который используется для key в .map и в начальном состоянии формы
    name: string; // Имя фильтра для UI
    checkboxes: boolean; // Является ли фильтр массивом для рендера чекбоксов
    options: string[]; // Опции, представленные в фильтре
  };
}

export default function Filter({ filter }: Props) {
  const [searchText, setSearchText] = useState('');

  const filteredOptions = filter.options.filter(option =>
    option.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className={styles.filter}>
      <div>
        <span className={styles.minus}></span>
        <h4>{filter.name}</h4>
      </div>
      <input
        type="search"
        placeholder={`Search by options`}
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <div className={styles.options}>
        {filter.checkboxes
          ? // Если фильтр предполагает выбор опций через кнопки, то рендерятся чекбоксы
            filteredOptions.map(option => (
              <div key={option}>
                <label>
                  <Field type="checkbox" name={`${filter.id}`} value={option} />
                  {option}
                </label>
              </div>
            ))
          : // Если фильтр предполагает ввод min/max нутриентов, то рендерятся числовые поля
            filteredOptions.map(option => (
              <div key={option}>
                <Field type="number" placeholder="min" name={`${filter.id}.${option}.min`} />
                <label>{option}</label>
                <Field type="number" placeholder="max" name={`${filter.id}.${option}.max`} />
              </div>
            ))}
      </div>
    </div>
  );
}
