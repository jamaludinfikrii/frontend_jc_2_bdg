// CLASS => untuk membut object
// OBJECT => Property, value, method

class Manusia{
    constructor(a,b,c,d){
        this.nama = a,
        this.umur = b,
        this.pekerjaan = c;
        this.alamat = d
    }
}

new Manusia()
// var manusia_1 = new Manusia('budi',50,'karyawan','bandung')

// EXTENDS = INHERITANCE

class KaryawanPurwadhika extends Manusia{
    constructor(gaji, jabatan, divisi,a,b){
        super(a,b)
        this.gaji = gaji,
        this.jabatan = jabatan,
        this.divisi = divisi
    }
}

var karyawan_1 = new KaryawanPurwadhika(40,'karyawan','karyaan','seto','40','karyawan','bandung')

console.log(karyawan_1)