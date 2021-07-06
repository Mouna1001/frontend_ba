export const navigation = [
 
  {
    text: '',
    path: '/home',
    //icon: 'home'
  },
  {
    text: 'Météo',
    path: '/today',
    icon: 'isnotblank'
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
  }
];
