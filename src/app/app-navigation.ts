
export const navigation = [
  {
    text: 'Météo',
    path: '/weather',
    icon: 'C:/Users/ASUS/Desktop/barrages/frontend_barrages/src/assets/images/cloudy%20.png'
  },
  {
    text: 'Barrage',
    icon: 'folder',
    items: [
      
      {
        text: 'Tableau barrages',
        path: '/barrages'
      },
      {
        text: 'Moyenne reserve ',
        path: '/chart'
      },
      {
        text: 'Moyenne taux de remplissage ',
        path: '/chart2'
      },
      {
        text: 'Moyenne capacité normale ',
        path: '/chart3'
      },
      
      {
        text: 'Tableau croisé',
        path: '/pivot'
      }

    ]
  },
  {
    text: 'Fill rate prediction',
    path: '',
    icon: 'isnotblank'
  },

];
