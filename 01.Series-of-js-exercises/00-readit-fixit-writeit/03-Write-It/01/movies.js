const movies = [
    'Cruella',
    'The conjuring',
    'Tom & Jerry',
    'Voyagers',
    'K3: Dans van de Farao',
]

document.write( '<ul>')
for (let i = 0; i < movies.length; i++) {
    document.write( `<li>${movies[i]}</li>`);
}
document.write( '</ul>')