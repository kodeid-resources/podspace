import { css } from 'emotion';

const styles = {
  wrapper: css`
    width: 95%;
    margin: 1.5em auto;
    padding-left: 1em;
    padding-right: 4em;
  `,
  podcasts: css`
    column-count: 2;
    column-gap: 1.5em;
  `,
  podcast: css`
    background-color: #fff;
    display: inline-block;
    margin: 0 0 1.5em;
    width: 100%;
    padding: 1.5em;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.18);
    border-radius: 3px;
  `,
  button: css`
    display: flex;
    text-decoration: none;
    height: 3em;
    align-items: center;
    justify-content: center;
    color: #000;
    width: "100%";
    border-radius: 2px;
    background-color: #eee;
    font-size: 1em;
    border: 1px solid rgb(216, 216, 216);
  `,
  box: css`
    background-color: #fff;
    padding: 1.5em;
    margin-top: 1em;
    margin-bottom: 1em;
    width: 100%;
  `,
  searchBar: css``,
  form: css`
    display: flex;
  `,
  input: css`
    font-size: 1em;
    border-radius: 0.3em;
    border: 0;
    background-color: #eee;
    padding: 0.5em;
    flex: 10;
    margin-right: 0.5em;
  `,
  float: css`
    position: fixed;
    width: 2em;
    height: 2em;
    bottom: 1em;
    right: 1em;
    background-color: #0c9;
    color: #fff;
    border-radius: 2em;
    text-align: center;
    box-shadow: 1em 1em 2em #eee;
    font-size: 2em;
    display: inline-block;
  `,
};

export default styles;
