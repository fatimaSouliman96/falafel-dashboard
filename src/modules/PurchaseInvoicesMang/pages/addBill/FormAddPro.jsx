import '../../../../componanets/style/form.css'
import { memo, useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ProductTable from '../../../../componanets/table/ProductTable';
import { infoProduct } from '../../const/infoProduct';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router'
import { useLocation } from "react-router-dom";
import axios from 'axios'
import ContentAddPro from '../../Componanets/ContentAddPro';

function FormAddPro({name='' , price , total=0, amountPro, onAddPro , oldItems=[] , totalValue=0}) {


 


  

 
  return (
    <>
      


    </>
  )
}

export default memo(FormAddPro)
