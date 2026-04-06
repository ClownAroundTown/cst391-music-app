'use client'

import React, { useState } from "react";
import './SearchForm.css';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface searchProps{
  props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}
}

const SearchForm = () => {
  const [inputText, setInputText] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleChangeInput = (e:string) => {
    setInputText(e);
    //console.log(inputText);
  };

  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    //props.onSubmit(inputText);
    console.log(inputText);

    
    const params = new URLSearchParams(searchParams);
    if (inputText) {
      params.set('query', inputText);
    } else {
      params.delete('query');
    }

    console.log("Path: " + `${pathname}?${params.toString()}`);
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <div>
      {" "}
      <form className="row" onSubmit={handleFormSubmit}>
        {" "}
        <div className="form-group col-lg-9">
          {" "}
          <input
            type="text"
            className="form-control"
            placeholder="Enter search term here"
            onChange={(e) => handleChangeInput(e.target.value)}
            defaultValue={searchParams.get('query')?.toString()}
          />{" "}
        </div>{" "}
        <button className="btn btn-primary col-md-3" type="submit">Submit form</button>
      </form>{" "}
    </div>
  );
};
export default SearchForm;
