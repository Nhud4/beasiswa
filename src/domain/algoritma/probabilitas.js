const Probability = async (data) => {
  const label = ['LULUS', 'TIDAK LULUS'];
  const umur = ['MEMENUHI', 'TIDAK'];
  const ips = ['CUKUP', 'TIDAK CUKUP'];
  const kartu = ['KPM', 'KIP', 'PKH', 'SKTM'];
  const univ = ['PTN', 'PTS'];
  const akreditasi = ['A', 'B', 'C', 'D'];

  const label1 = data.filter((item) => item.label === label[0]);
  const label2 = data.filter((item) => item.label === label[1]);

  const umur1 = data.filter((item) => item.umur === umur[0]);
  const umur2 = data.filter((item) => item.umur === umur[1]);

  const ips1 = data.filter((item) => item.ips === ips[0]);
  const ips2 = data.filter((item) => item.ips === ips[1]);

  const kartu1 = data.filter((item) => item.jenis_kartu === kartu[0]);
  const kartu2 = data.filter((item) => item.jenis_kartu === kartu[1]);
  const kartu3 = data.filter((item) => item.jenis_kartu === kartu[2]);
  const kartu4 = data.filter((item) => item.jenis_kartu === kartu[3]);

  const univ1 = data.filter((item) => item.univ === univ[0]);
  const univ2 = data.filter((item) => item.univ === univ[1]);

  const akreditasi1 = data.filter((item) => item.akreditasi === akreditasi[0]);
  const akreditasi2 = data.filter((item) => item.akreditasi === akreditasi[1]);
  const akreditasi3 = data.filter((item) => item.akreditasi === akreditasi[2]);
  const akreditasi4 = data.filter((item) => item.akreditasi === akreditasi[3]);

  const algoritma = (values, type, data, label) => {
    let dataFilter = [];
    if(type === 'umur'){
      dataFilter = data.filter((item) => item.umur === values);
    }
    if(type === 'ips'){
      dataFilter = data.filter((item) => item.ips === values);
    }
    if(type === 'kartu'){
      dataFilter = data.filter((item) => item.jenis_kartu === values);
    }
    if(type === 'univ'){
      dataFilter = data.filter((item) => item.univ === values);
    }
    if(type === 'akreditasi'){
      dataFilter = data.filter((item) => item.akreditasi === values);
    }

    return {
      label: label,
      attribute: dataFilter.length,
      probability: dataFilter.length / data.length
    };
  };

  const dataTotal = {
    label: [
      {
        label: label[0],
        totalLabel: label1.length,
        totalData: data.length,
        probability: label1.length / data.length
      },
      {
        label: label[1],
        totalLabel: label2.length,
        totalData: data.length,
        probability: label2.length / data.length
      },
    ],
    umur: [
      {
        attribute: umur[0],
        total: umur1.length,
        probability1: algoritma(umur[0], 'umur', label1, label[0]),
        probability2: algoritma(umur[0], 'umur', label2, label[1])
      },
      {
        attribute: umur[1],
        total: umur2.length,
        probability1: algoritma(umur[1], 'umur', label1, label[0]),
        probability2: algoritma(umur[1], 'umur', label2, label[1])
      }
    ],
    ips: [
      {
        attribute: ips[0],
        total: ips1.length,
        probability1: algoritma(ips[0], 'ips', label1, label[0]),
        probability2: algoritma(ips[0], 'ips', label2, label[1])
      },
      {
        attribute: ips[1],
        total: ips2.length,
        probability1: algoritma(ips[1], 'ips', label1, label[0]),
        probability2: algoritma(ips[1], 'ips', label2, label[1])
      },
    ],
    katru: [
      {
        attribute: kartu[0],
        total: kartu1.length,
        probability1: algoritma(kartu[0], 'kartu', label1, label[0]),
        probability2: algoritma(kartu[0], 'kartu' ,label2, label[1])
      },
      {
        attribute: kartu[1],
        total: kartu2.length,
        probability1: algoritma(kartu[1], 'kartu', label1, label[0]),
        probability2: algoritma(kartu[1], 'kartu', label2, label[1])
      },
      {
        attribute: kartu[2],
        total: kartu3.length,
        probability1: algoritma(kartu[2], 'kartu', label1, label[0]),
        probability2: algoritma(kartu[2], 'kartu', label2, label[1])
      },
      {
        attribute: kartu[3],
        total: kartu4.length,
        probability1: algoritma(kartu[3], 'kartu', label1, label[0]),
        probability2: algoritma(kartu[3], 'kartu', label2, label[1])
      },
    ],
    univ: [
      {
        attribute: univ[0],
        total: univ1.length,
        probability1: algoritma(univ[0], 'univ', label1, label[0]),
        probability2: algoritma(univ[0], 'univ', label2, label[1])
      },
      {
        attribute: univ[1],
        total: univ2.length,
        probability1: algoritma(univ[1], 'univ', label1, label[0]),
        probability2: algoritma(univ[1], 'univ', label2, label[1])
      },
    ],
    akreditasi: [
      {
        attribute: akreditasi[0],
        total: akreditasi1.length,
        probability1: algoritma(akreditasi[0], 'akreditasi', label1, label[0]),
        probability2: algoritma(akreditasi[0], 'akreditasi', label2, label[1])
      },
      {
        attribute: akreditasi[1],
        total: akreditasi2.length,
        probability1: algoritma(akreditasi[1], 'akreditasi', label1, label[0]),
        probability2: algoritma(akreditasi[1], 'akreditasi', label2, label[1])
      },
      {
        attribute: akreditasi[2],
        total: akreditasi3.length,
        probability1: algoritma(akreditasi[2], 'akreditasi', label1, label[0]),
        probability2: algoritma(akreditasi[2], 'akreditasi', label2, label[1])
      },
      {
        attribute: akreditasi[3],
        total: akreditasi4.length,
        probability1: algoritma(akreditasi[3], 'akreditasi', label1, label[0]),
        probability2: algoritma(akreditasi[3], 'akreditasi', label2, label[1])
      },
    ],
  };

  return dataTotal;
};

export default Probability;
