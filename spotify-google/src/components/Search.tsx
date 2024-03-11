import { Field, Form, Formik } from "formik";
import { Button } from "@material-tailwind/react";
import { searchValues } from "../../types";
import { useRecoilState } from "recoil";
import { locationSearch, genreSearch } from "@/atom/store";

/*
FORM/SEARCH bar must sit behind the auth layer.

*/
/*

genre: most likely dropdown
1. need to get a list from spotify somehow to grab all genres
    a. if there's to many may need to do some kind of top 50 at a time

location: autofill ONLY in america
1. need to use google maps api


search button:
1. only enabled once both are filled out
2. after button is clicked 
    a. will have to curate a playlist based on location and genre
    b. playlist of 50ish songs?
    c. 5 songs per artist
*/
const Search: React.FC = () => {
  const [locationText, setLocationText] = useRecoilState(locationSearch);
  const [genreText, setGenreText] = useRecoilState(genreSearch);
  
  return (
    <Formik
      initialValues={{
        genre: '',
        location: '',
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      <Form>
        <label  htmlFor='Genre'>
          Genre
        </label>
        <Field id='genre' name='genre' />

        <label  htmlFor='Location'>
          Location
        </label>
        <Field id='location' name='location' />
        <div className='mt-8'>
          <button type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default Search;