const {obtenerPromedio,argv}=require('./datos.js');

console.log(argv);

if(argv._[0]=='promedio'){
	console.log('El promedio de '+ argv.n );
}

else{
	console.log('Promedio no calculado');
}