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
        text: 'Datagrid',
        path: '/barrages'
      },
      {
        text: 'Chart',
        path: '/chart'
      },
      {
        text: 'Line Chart',
        path: '/Linechart'
      }
    ]
  }
];
