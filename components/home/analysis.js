import React, { useState, setState } from "react";
import Prismic from "prismic-javascript";
import { Link, Date } from "prismic-reactjs";

let dataFile = require("./data.json");
import Octicon, {
  Eye,
  Heart,
  PlusSmall,
  ChevronUp,
  Check
} from "@githubprimer/octicons-react";

const data = dataFile.analyses;

class Analysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: null,
      analyses: data,
      descriptionShown: false,
      added: false
    };
    this.toggleDescriptionShown = this.toggleDescriptionShown.bind(this);
    this.toggleAdded = this.toggleAdded.bind(this);
  }

  toggleDescriptionShown() {
    this.setState({ descriptionShown: !this.state.descriptionShown });
  }

  toggleAdded() {
    this.setState({ descriptionShown: !this.state.descriptionShown });
  }

  render() {
    return this.state.analyses.map((analysis, index) => {
      return (
        <div className="black avenir  measure lh-copy " key={index}>
          <div className=" f4 mt3 pt2 mb1 measure-narrow mr4 fw5  ">
            {analysis.title}
          </div>

          <div className="lh-copy measure-narrow ">
            <div className="garamond mr4"> {analysis.intro}</div>
            <button
              className="f2 btn link"
              onClick={e => {
                e.preventDefault();
                this.toggleDescriptionShown();
              }}
            >
              {descriptionShown ? (
                <div className="tl f5 garamond lh-copy measure-narrow mt2 fw1 i">
                  {analysis.description}
                  <Octicon
                    icon={ChevronUp}
                    size="small"
                    className="ph1 black "
                  />
                </div>
              ) : (
                "..."
              )}
            </button>
            <div className="footer-wrapper mt2">
              <div className="author  avenir">
                <div className="fw5 navy"> {analysis.author}</div>
                <div className="f6"> {analysis.position} </div>
                <div className="basket">
                  <div className="f7 mt2 centered pt1"> £9.99 </div>
                  {added ? (
                    <button
                      className="btn link"
                      onClick={e => {
                        e.preventDefault();
                        this.toggleAdded();
                      }}
                    >
                      <div className="add-round ml2 mt2 centered green">
                        <Octicon
                          icon={Check}
                          size="small"
                          className="ph1 black-70 "
                        />
                      </div>
                    </button>
                  ) : (
                    <button
                      className="btn link"
                      onClick={e => {
                        e.preventDefault();
                        this.toggleAdded();
                      }}
                    >
                      <div className=" add-round ml2 mt2 centered black-70">
                        <Octicon
                          icon={PlusSmall}
                          size="small"
                          className="ph1 black-70 "
                        />
                      </div>
                    </button>
                  )}
                </div>
              </div>
              <div className="footer mr4 mt3 i measure-narrow ">
                <div className="f7 grey fw3 tr ">
                  <Octicon icon={Eye} size="small" className="ph1 black-70" />
                  {analysis.views}
                  <Octicon icon={Heart} size="small" className="ph1 black-70" />
                  {analysis.likes}
                </div>
                <div className="f7 tr fw3 grey ">{analysis.keywords}</div>
              </div>
            </div>
            <div className="line mt4 mb4 black-40" />
          </div>
          <style jsx>
            {`
              .basket {
                display: flex;
                flex-direction: row;
              }

              .footer-wrapper {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              }

              .footer {
                align-self: flex-start;
              }
              .centered {
                align-self: center;
              }

              .author {
                align-self: center;
                width: 70%;
              }
              .line {
                width: 80vw;
                height: 1px;
                border-bottom: 1px dotted;
              }

              .add-round {
                height: 20px;
                width: 20px;
                border-radius: 50%;
                border: solid 1px;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .btn {
                border: none;
                background: transparent;
                margin-left: -5px;
              }

              .link:focus {
                transition: color 0.15s ease-in;
                outline: 1px none;
              }
            `}
          </style>
        </div>
      );
    });
  }
}

export default Analysis;
