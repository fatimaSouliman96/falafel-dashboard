import { useEffect, useState } from 'react'
import ProductTable from '../../../componanets/table/ProductTable'
import { infoSupp } from '../const/infoSupp'
import axios from 'axios'
import TableContentSuppliers from '../componanets/TableContentSuppliers'
import { useNavigate } from 'react-router'
import HeaderMange from '../../../componanets/HeaderMangeTable/HeaderMange'

function SuppliersMang() {
    const [ data ,setData ] = useState()
    const [ allData , setAllData ] = useState()
    const navigate = useNavigate()
    useEffect( () => {
    axios.get("https://api-pos.alzero1store.com/api/suppliers")
    .then(function (res) {
      setAllData(res.data.data)
      setData(res.data.data)
    })
    } , [])

    const goTo = (num, id) => {
      navigate("editSupplier", {
        state: {
          id: id,
          name: data[num].name,
          phone: data[num].phone,
          address: data[num].address,
        }
      })
    }
    async function deleteSupp(id) {
      const conf = window.confirm("هل تريد حذف هذا المورد")
      if (conf) {
        const newData = data.filter(ele => ele.id !== id)
        setData(newData)
  
  
        await axios.delete(`https://api-pos.alzero1store.com/api/suppliers/${id}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
  
    }
    const onChangeSearch = async(e) => {
      if (e.target.value=="") {
        console.log("empty")
        setData(allData)
      }else{
      await axios.get(`https://api-pos.alzero1store.com/api/suppliers/search/${e.target.value}`)
          .then(res => setData(res.data.data))
          .catch(function (error) {
            console.log(error);
          });}
  
    }
  
  return (
    <div className='suppliers' >
      <h1 className='title-sec' >ادارة الموردين</h1>
      <HeaderMange goTo={"addSupplier"} textBtn={"اضافة مورد"}  onChangeSearch={onChangeSearch}/>
      <ProductTable infoTh={infoSupp} contentTable={<TableContentSuppliers data={data} toNavigate={goTo} deletePro={deleteSupp}/>}/>
    </div>
  )
}

export default SuppliersMang
