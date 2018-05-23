import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import NavComponent from '../components/NavCom.jsx';
import RightSideBar from '../components/RightSideBar.jsx';
import CardComponent from '../components/CardCom.jsx';
import LeftSideBar from '../components/LeftSideBar.jsx';
export default class FriendSelecter extends Flux.View {
    render() {
        return (
            <div>
                <NavComponent/>
                <div className="row">
                    <div className="col-lg-3 bg-dark">
                        <LeftSideBar selector="checkbox"/>
                    </div>
                    <div className="col-lg-6">
                        <CardComponent 
                            otherClass="pl-2"
                            className="d-inline-block"
                            codeName="sometom"
                            imgUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAADHCAMAAADlCqUFAAAAFVBMVEXMzMzb29vOzs7Z2dnW1tbR0dHU1NT2HhYqAAAD60lEQVR4nO2dybLrIAxEPf//J9+AU5XEL5Vng9pwQGeTbdqSWgI8DIPjOI7jOI7jOI7jOE4iU2Rd1/hb+t/cx0Pysszz+M68bGv7l2Dalk/ZH5dga/kCTD+UP1nW0n9SwwnpewI0qH9dTknf41/6zxozXdAewt9S+V/U3pb89ar2saHkvxz4SBu9bzpn9F/jj78CU7L2CHv8yRQfMwCr30D8g620jDRsxFP7X5rbfwM4/G5m4oHyrfKeKT+90TcgP2W+/QXK+mzzPkAa/S0t7wkn9+1D/8j90qJOY131EUzwjQ1/hxJ8ReKPmOALPC8AsX1J4j8oresUosSHpL7E8QOI1Ldb2h5AuL6q7McRMOzLyh5R+LKyR+zxibp9AGB7MtPrXT1gj6Nv9bqGB2h5wobn6ivH1bt6V+/qXb2rd/Xtqx+E4uvf2sq4Re+/AFa4fav33Q0Rfe/r9b2nW3/D61y9btypv90r1QMsX9jwAZYvbHkAyxe2PIDp6UyfYHo620OYnmyNizA9me0hyl5le4AjzIjG9iBlL7I9SNmLpj1I4mtsj9HtA4rCp5S9pvAxiS+JPWKJE9B0PIh81ZzPyH3V+h7he7qdLULwdfv5hGlPd5ZDSH3dKSZglae8e8HV143y7oX61Qtdj7DM69vz++73uhNswjqn70lXVvgE09MVPqHse1/fi1Kf0O8CmuATHD+iCD4l9INilcsw/B3zpQ5gaf/G9Rco/wT3ctHJbuJFfljAKvtJJf/CKvlBbv+G1cTLmHCPWA09mDHnAyv1RM8brAqfaXpWhc8se6vUhya+TcenJr7NBic18W1SH5v4Fq7PTXyL1GeOOk9yfY+1rj+SG3yu50Uyg1/672eSF3x46DNtH131gZyejzb8nfS1DnNT50Cy8eHzPpCa+w3kfSDN95vI+0DX30dMkY/v9G9cL/1Gij7i6l29q3f1fam//joGV98Mrt7Vd6m+b8939a7e1Z+j7/V9S+qv7+00tLHl6jtWf/08pyX1CUeZTRzkRFJOc9pp+Emn2K0EP+0kq5WOn3iI20bwk+/eaEF++q0r7NvVIjn37dDl5z6Xh5bf9Z2qFg9n4B7DfLIaPY5IDL/hk7gzTb/1U8gk/cbaA5j4r5r3bsyAR7EnK6/7pn+rW78g5T+p1wCUYX9RZwFMwm+jHagtAe4J+4uaHEBe7d+oYwK+O+wvyjvAtJXSHimaAEVS/qC/lAOKZrqrFJmBi5X7v9yuvyLtgVv1V1DvR27TX6H2wD3+L/ziayb6s69KA78j3v83fG2cBmX4a9c+KjeAAeJ17yu4bwGfgyb3q7a7dxTOh8j6nfOi/gDp6D+D53TPPQAAAABJRU5ErkJggg=="
                            con1="34" 
                            con2="Race car Driver" 
                            con3="love Jello"
                        />
                        <CardComponent 
                            otherClass="cardspace"
                            className="d-inline-block"
                            codeName="sometom"
                            imgUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAADHCAMAAADlCqUFAAAAFVBMVEXMzMzb29vOzs7Z2dnW1tbR0dHU1NT2HhYqAAAD60lEQVR4nO2dybLrIAxEPf//J9+AU5XEL5Vng9pwQGeTbdqSWgI8DIPjOI7jOI7jOI7jOE4iU2Rd1/hb+t/cx0Pysszz+M68bGv7l2Dalk/ZH5dga/kCTD+UP1nW0n9SwwnpewI0qH9dTknf41/6zxozXdAewt9S+V/U3pb89ar2saHkvxz4SBu9bzpn9F/jj78CU7L2CHv8yRQfMwCr30D8g620jDRsxFP7X5rbfwM4/G5m4oHyrfKeKT+90TcgP2W+/QXK+mzzPkAa/S0t7wkn9+1D/8j90qJOY131EUzwjQ1/hxJ8ReKPmOALPC8AsX1J4j8oresUosSHpL7E8QOI1Ldb2h5AuL6q7McRMOzLyh5R+LKyR+zxibp9AGB7MtPrXT1gj6Nv9bqGB2h5wobn6ivH1bt6V+/qXb2rd/Xtqx+E4uvf2sq4Re+/AFa4fav33Q0Rfe/r9b2nW3/D61y9btypv90r1QMsX9jwAZYvbHkAyxe2PIDp6UyfYHo620OYnmyNizA9me0hyl5le4AjzIjG9iBlL7I9SNmLpj1I4mtsj9HtA4rCp5S9pvAxiS+JPWKJE9B0PIh81ZzPyH3V+h7he7qdLULwdfv5hGlPd5ZDSH3dKSZglae8e8HV143y7oX61Qtdj7DM69vz++73uhNswjqn70lXVvgE09MVPqHse1/fi1Kf0O8CmuATHD+iCD4l9INilcsw/B3zpQ5gaf/G9Rco/wT3ctHJbuJFfljAKvtJJf/CKvlBbv+G1cTLmHCPWA09mDHnAyv1RM8brAqfaXpWhc8se6vUhya+TcenJr7NBic18W1SH5v4Fq7PTXyL1GeOOk9yfY+1rj+SG3yu50Uyg1/672eSF3x46DNtH131gZyejzb8nfS1DnNT50Cy8eHzPpCa+w3kfSDN95vI+0DX30dMkY/v9G9cL/1Gij7i6l29q3f1fam//joGV98Mrt7Vd6m+b8939a7e1Z+j7/V9S+qv7+00tLHl6jtWf/08pyX1CUeZTRzkRFJOc9pp+Emn2K0EP+0kq5WOn3iI20bwk+/eaEF++q0r7NvVIjn37dDl5z6Xh5bf9Z2qFg9n4B7DfLIaPY5IDL/hk7gzTb/1U8gk/cbaA5j4r5r3bsyAR7EnK6/7pn+rW78g5T+p1wCUYX9RZwFMwm+jHagtAe4J+4uaHEBe7d+oYwK+O+wvyjvAtJXSHimaAEVS/qC/lAOKZrqrFJmBi5X7v9yuvyLtgVv1V1DvR27TX6H2wD3+L/ziayb6s69KA78j3v83fG2cBmX4a9c+KjeAAeJ17yu4bwGfgyb3q7a7dxTOh8j6nfOi/gDp6D+D53TPPQAAAABJRU5ErkJggg=="
                            con1="34" 
                            con2="Race car Driver" 
                            con3="love Jello"
                        />
                        <CardComponent 
                            otherClass="pl-2"
                            className="d-inline-block"
                            codeName="sometom"
                            imgUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAADHCAMAAADlCqUFAAAAFVBMVEXMzMzb29vOzs7Z2dnW1tbR0dHU1NT2HhYqAAAD60lEQVR4nO2dybLrIAxEPf//J9+AU5XEL5Vng9pwQGeTbdqSWgI8DIPjOI7jOI7jOI7jOE4iU2Rd1/hb+t/cx0Pysszz+M68bGv7l2Dalk/ZH5dga/kCTD+UP1nW0n9SwwnpewI0qH9dTknf41/6zxozXdAewt9S+V/U3pb89ar2saHkvxz4SBu9bzpn9F/jj78CU7L2CHv8yRQfMwCr30D8g620jDRsxFP7X5rbfwM4/G5m4oHyrfKeKT+90TcgP2W+/QXK+mzzPkAa/S0t7wkn9+1D/8j90qJOY131EUzwjQ1/hxJ8ReKPmOALPC8AsX1J4j8oresUosSHpL7E8QOI1Ldb2h5AuL6q7McRMOzLyh5R+LKyR+zxibp9AGB7MtPrXT1gj6Nv9bqGB2h5wobn6ivH1bt6V+/qXb2rd/Xtqx+E4uvf2sq4Re+/AFa4fav33Q0Rfe/r9b2nW3/D61y9btypv90r1QMsX9jwAZYvbHkAyxe2PIDp6UyfYHo620OYnmyNizA9me0hyl5le4AjzIjG9iBlL7I9SNmLpj1I4mtsj9HtA4rCp5S9pvAxiS+JPWKJE9B0PIh81ZzPyH3V+h7he7qdLULwdfv5hGlPd5ZDSH3dKSZglae8e8HV143y7oX61Qtdj7DM69vz++73uhNswjqn70lXVvgE09MVPqHse1/fi1Kf0O8CmuATHD+iCD4l9INilcsw/B3zpQ5gaf/G9Rco/wT3ctHJbuJFfljAKvtJJf/CKvlBbv+G1cTLmHCPWA09mDHnAyv1RM8brAqfaXpWhc8se6vUhya+TcenJr7NBic18W1SH5v4Fq7PTXyL1GeOOk9yfY+1rj+SG3yu50Uyg1/672eSF3x46DNtH131gZyejzb8nfS1DnNT50Cy8eHzPpCa+w3kfSDN95vI+0DX30dMkY/v9G9cL/1Gij7i6l29q3f1fam//joGV98Mrt7Vd6m+b8939a7e1Z+j7/V9S+qv7+00tLHl6jtWf/08pyX1CUeZTRzkRFJOc9pp+Emn2K0EP+0kq5WOn3iI20bwk+/eaEF++q0r7NvVIjn37dDl5z6Xh5bf9Z2qFg9n4B7DfLIaPY5IDL/hk7gzTb/1U8gk/cbaA5j4r5r3bsyAR7EnK6/7pn+rW78g5T+p1wCUYX9RZwFMwm+jHagtAe4J+4uaHEBe7d+oYwK+O+wvyjvAtJXSHimaAEVS/qC/lAOKZrqrFJmBi5X7v9yuvyLtgVv1V1DvR27TX6H2wD3+L/ziayb6s69KA78j3v83fG2cBmX4a9c+KjeAAeJ17yu4bwGfgyb3q7a7dxTOh8j6nfOi/gDp6D+D53TPPQAAAABJRU5ErkJggg=="
                            con1="34" 
                            con2="Race car Driver" 
                            con3="love Jello"
                        />
                        
                    </div>
                    <div className="col-lg-3">
                        <RightSideBar/>
                    </div>
                </div>
            </div>
        );
    }
}