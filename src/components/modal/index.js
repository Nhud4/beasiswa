import React, { useState } from 'react';
import { Tabs, Tab, Box, Modal, Button } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Server from '@/utils/server';
import TabPanel from './tab_panel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 550,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function FormModal() {
  const server = new Server();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [nik, setNik] = useState('');
  const [kk, setKK] = useState('');
  const [Tempat, SetTempat] = useState('');
  const [date, setDate] = useState(new Date());
  const [gender, setGender] = useState('');
  const [ibu, setIbu] = useState('');
  const [desa, setDesa] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [universitas, setUniv] = useState('');
  const [jenis, setJenis] = useState('');
  const [akreditasi, setAkreditasi] = useState('');
  const [semester, setSemester] = useState('');
  const [ips, setIps] = useState('');
  const [ukt, setUkt] = useState('');
  const [hp, setHp] = useState('');
  const [bank, setBank] = useState('');
  const [rekening, setRekening] = useState('');
  const [kartu, setKartu] = useState('');
  const [nim, setNim] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handelAdd = async (e) =>{
    e.preventDefault();
    const result = await server.inputData({
      nama: name,
      umur: age,
      nik: nik,
      kk: kk,
      temptLahir: Tempat,
      tglLahir: date.$d,
      gender:gender,
      ibu: ibu,
      desa: desa,
      kecamatan: kecamatan,
      nim: nim,
      universitas:universitas,
      jenis: jenis,
      akreditasi: akreditasi,
      semester: semester,
      ips: ips,
      ukt: ukt,
      hp: hp,
      bank: bank,
      rekening: rekening,
      kartu: kartu,
    });

    alert(result.message);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="p-1 bg-primary-10 rounded-full shadow-2 cursor-pointer" onClick={handleOpen}>
        <AddRoundedIcon sx={{ fontSize: 25, color: '#FFFFFF' }}/>
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} borderRadius={2}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <div
              className="absolute top-0 right-0 -mr-4 -mt-4 p-1 bg-white rounded-full shadow-2 cursor-pointer"
              onClick={handleClose}
            >
              <CloseRoundedIcon sx={{ fontSize: 30, color: '#1976D2' }}/>
            </div>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
            >
              <Tab label="Biodata" {...a11yProps(0)} sx={{ fontWeight: 'bold' }}/>
              <Tab label="Universitas" {...a11yProps(1)} sx={{ fontWeight: 'bold' }}/>
              <Tab label="Data Pendukung" {...a11yProps(2)} sx={{ fontWeight: 'bold' }}/>
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="space-y-1 pt-2">
              <TextField fullWidth label="Nama Lengkap" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="flex">
              <div className="space-y-1 w-1/2 mr-4 pt-2">
                <TextField label="Nomor NIK" value={nik} onChange={(e) => setNik(e.target.value)}/>
              </div>
              <div className="space-y-1 w-1/2 pt-2">
                <TextField label="Nomor KK" value={kk} onChange={(e) => setKK(e.target.value)}/>
              </div>
            </div>
            <div className="space-y-1 pt-2">
              <TextField fullWidth label="Nama Ibu Kandung" value={ibu} onChange={(e) => setIbu(e.target.value)}/>
            </div>
            <div className="flex">
              <div className="space-y-1 w-1/2 mr-4 pt-2">
                <TextField label="Usia" value={age} onChange={(e) => setAge(e.target.value)}/>
              </div>
              <div className="w-1/2 space-y-1 pt-2">
                <FormControl fullWidth>
                  <InputLabel>Jenis Kelamin</InputLabel>
                  <Select
                    value={gender}
                    label="Jenis Kelamin"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <MenuItem value={'laki-laki'}>Laki-laki</MenuItem>
                    <MenuItem value={'perempuan'}>Perempuan</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="flex">
              <div className="space-y-1 w-1/2 mr-4 pt-2">
                <TextField label="Tempat lahir" value={Tempat} onChange={(e) => SetTempat(e.target.value)}/>
              </div>
              <div className=" w-1/2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      label="Tanggal Lahir"
                      inputFormat="MMM dd yyyy"
                      onChange={(e) => {setDate(e);}}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            <div className="flex">
              <div className="space-y-1 w-1/2 mr-4 pt-2">
                <TextField label="Kecamatan" value={kecamatan} onChange={(e) => setKecamatan(e.target.value)}/>
              </div>
              <div className="space-y-1 w-1/2 pt-2">
                <TextField label="Desa" value={desa} onChange={(e) => setDesa(e.target.value)}/>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="space-y-1 pt-2">
              <TextField fullWidth label="Nomor Induk Mahasiswa" value={nim} onChange={(e) => setNim(e.target.value)}/>
            </div>
            <div className="space-y-1 pt-2">
              <TextField fullWidth label="Asal Universitas" value={universitas} onChange={(e) => setUniv(e.target.value)}/>
            </div>
            <div className="flex">
              <div className="w-1/2 mr-4 pt-2">
                <FormControl fullWidth>
                  <InputLabel>Jenis Universitas</InputLabel>
                  <Select
                    value={jenis}
                    label="Jenis Universitas"
                    onChange={(e) => setJenis(e.target.value)}
                  >
                    <MenuItem value={'PTN'}>PTN</MenuItem>
                    <MenuItem value={'PTS'}>PTS</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="w-1/2 space-y-1 pt-2">
                <FormControl fullWidth>
                  <InputLabel>Akreditasi</InputLabel>
                  <Select
                    value={akreditasi}
                    label="Akreditasi"
                    onChange={(e) => setAkreditasi(e.target.value)}
                  >
                    <MenuItem value={'A'}>PTN</MenuItem>
                    <MenuItem value={'B'}>PTS</MenuItem>
                    <MenuItem value={'C'}>PTN</MenuItem>
                    <MenuItem value={'D'}>PTS</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="space-y-1 w-1/2 pt-2">
              <TextField label="UKT" value={ukt} onChange={(e) => setUkt(e.target.value)}/>
            </div>
            <div className="flex">
              <div className="space-y-1 w-1/2 mr-4 pt-2">
                <TextField label="Semester" value={semester} onChange={(e) => setSemester(e.target.value)}/>
              </div>
              <div className="space-y-1 w-1/2 pt-2">
                <TextField label="Nilai Semester" value={ips} onChange={(e) => setIps(e.target.value)}/>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} onSubmite={true}>
            <div className="space-y-1 pt-2">
              <TextField fullWidth label="Nomor Handphone" value={hp} onChange={(e) => setHp(e.target.value)}/>
            </div>
            <div className="space-y-1 pt-2">
              <TextField fullWidth label="Bank" value={bank} onChange={(e) => setBank(e.target.value)}/>
            </div>
            <div className="space-y-1 pt-2">
              <TextField fullWidth label="Nomor Rekening" value={rekening} onChange={(e) => setRekening(e.target.value)}/>
            </div>
            <div className="w-1/2 space-y-1 pt-2">
              <FormControl fullWidth>
                <InputLabel>Kartu Pendukung</InputLabel>
                <Select
                  value={kartu}
                  label="Kartu Pendukung"
                  onChange={(e) => setKartu(e.target.value)}
                >
                  <MenuItem value={'KIP'}>KIP</MenuItem>
                  <MenuItem value={'KPM'}>KPM</MenuItem>
                  <MenuItem value={'PKH'}>PKH</MenuItem>
                  <MenuItem value={'Tidak Ada'}>Tidak Ada</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex justify-end items-center pt-[8rem]">
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleClose}>Batal</Button>
                <Button variant="contained" style={{ backgroundColor: '#1976D2' }} endIcon={<SaveRoundedIcon />}>Simpan</Button>
              </Stack>
            </div>
          </TabPanel>
        </Box>
      </Modal>
    </div>
  );
}
