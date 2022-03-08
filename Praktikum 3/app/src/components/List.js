import React, { Component } from "react";
import Image from "./Image";

class List extends Component {
  render() {
    return (
      <div>
        <ol>
          <li>
            Satu
            <Image linkGambar="https://placeimg.com/640/480/any" />
          </li>
          <li>
            Dua
            <Image linkGambar="https://placeimg.com/640/480/any" />
          </li>
          <li>
            Tiga
            <Image linkGambar="https://placeimg.com/640/480/any" />
          </li>
          <li>
            Empat
            <Image linkGambar="https://placeimg.com/640/480/any" />
          </li>
        </ol>
      </div>
    );
  }
}

export default List;
