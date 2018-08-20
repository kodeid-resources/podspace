import { css } from 'emotion';

const styles = {
  wrapper: css`
    width: 80%;
    margin: 1.5em auto;
    padding-left: 1em;
    padding-right: 1em;
  `,
  podcasts: css`
    column-count: 2;
    column-gap: 1px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `,
  podcast: css`
    flex: 1;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    margin: 1.5em 20px;
    width: 100%;
    padding: 1.5em 20px;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.18);
    border-radius: 3px;
    box-sizing: border-box;
    min-width: calc(50%-20px);
    justify-content: center;
    align-items: center;
  `,
  button: css`
    display: flex;
    text-decoration: none;
    height: 3em;
    align-items: center;
    justify-content: center;
    color: #000;
    width: 100%;
    border-radius: 2px;
    background-color: #eee;
    font-size: 1em;
    border: 1px solid rgb(216, 216, 216);
  `,
  searchButton: css`
    display: flex;
    text-decoration: none;
    height: 3em;
    align-items: center;
    justify-content: center;
    color: #000;
    width: 10%;
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
    box-sizing: border-box;
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
