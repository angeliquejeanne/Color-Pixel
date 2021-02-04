let couleurPinceau = 'red';

function changerCouleurPinceau(nouvelleCouleur)
{
    couleurPinceau = nouvelleCouleur;
}
function colorierPixel(pixel)
{
    pixel.style.backgroundColor = couleurPinceau;
}