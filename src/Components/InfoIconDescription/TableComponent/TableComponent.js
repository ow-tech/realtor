import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { buildingTypes } from '../../../Constants/ConstantValues';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#777575',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  function createData(name, Floors, Height) {
    return { name, Floors, Height };
  }

  const rows = [
    createData('Low Rise', buildingTypes[0].lowRise[0],buildingTypes[0].lowRise[1]),
    createData('Multi Story', buildingTypes[0].multiStory[0],buildingTypes[0].multiStory[1]),
    createData('Mid-Rise',buildingTypes[0].midRise[0],buildingTypes[0].midRise[1]),
    createData('Small High Rise', buildingTypes[0].smallHighRise[0], buildingTypes[0].smallHighRise[1]),
    createData('High Rise', buildingTypes[0].highRise[0], buildingTypes[0].highRise[1]),
    createData('Ultra High Rise', buildingTypes[0].ultraHighRise[0], buildingTypes[0].ultraHighRise[1]),
    createData('Supertall', buildingTypes[0].supertall[0], buildingTypes[0].supertall[1]),
    createData('Megatall', buildingTypes[0].megatall[0], buildingTypes[0].megatall[1]),
  ];
  
function TableComponent() {
    // console.log(buildingTypes[0].lowRise[0])
    // console.log('am here')
  return (
    <>
      <TableContainer component={Paper}>
      <Table  aria-label="a dense table" size='small'>
        <TableHead>
          <TableRow className='styledTableRow'>
            <StyledTableCell>Building Types</StyledTableCell>
            <StyledTableCell align="right" className='styledTableCell'>Floors</StyledTableCell>
            <StyledTableCell align="right" className='styledTableCell'>Height&nbsp;(m)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} className='styledTableRow'>
              <StyledTableCell component="th" scope="row" className='styledTableRow'>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right" className='styledTableCell' >{row.Floors}</StyledTableCell>
              <StyledTableCell align="right" className='styledTableCell'>{row.Height}</StyledTableCell>
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </>
  )
}

export default TableComponent