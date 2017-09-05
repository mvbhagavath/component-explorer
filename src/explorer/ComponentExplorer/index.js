import React, { PropTypes } from "react";
import Ecology from "ecology";
import { parse } from 'react-docgen';

import * as Docs from 'docs.js';

const ComponentExplorer = ({ params }) => {
    let { component } = params;
    return (
        <div className="row">
            <div className="col-md-6">
                <span>Source Code</span>
            </div>
            <div className="col-md-6">
                <span>Preview</span>
            </div>
            <div className="col-md-12">
                <Ecology
                    overview={Docs[`${component}Docs`]}
                    source={parse(Docs[`${component}Raw`])}
                    scope={{ React, CE: Docs }}
                    playgroundtheme="blackboard" />
            </div>
        </div>
    );
};

ComponentExplorer.propTypes = {
    params: PropTypes.shape({
        component: PropTypes.string
    }).isRequired
};

export default ComponentExplorer;