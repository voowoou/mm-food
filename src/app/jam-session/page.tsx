'use client';

import { Form, Formik } from 'formik';
import { jamFiltersArr } from '@/config/jamFiltersArr';
import Filter from '@/components/UI/Filter';

// Тип для начального состояния формы
interface InitialValues {
  [key: string]: string[] | { [key: string]: { min: string; max: string } }[];
}

export default function JamSession() {
  /* Данный код задает следующую структуру начального состояния:
  {
    cuisine: [],
    diet: [],
    intolerances: [],
    type: [],
    nutrients: [
      {
        calories: { min: '', max: '' },
      },
      {
        carbs: { min: '', max: '' },
      },
      // ...и так далее для всех фильтров с указанием граммов вещества
    ]
  } */
  const initialValues: InitialValues = jamFiltersArr.reduce((values, filter) => {
    values[filter.id] = filter.checkboxes
      ? []
      : filter.options.map(option => ({ [option]: { min: '', max: '' } }));
    return values;
  }, {} as InitialValues);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          {jamFiltersArr.map(filter => (
            <Filter key={filter.id} filter={filter} />
          ))}
        </div>
        <button type="submit">JAM</button>
      </Form>
    </Formik>
  );
}
