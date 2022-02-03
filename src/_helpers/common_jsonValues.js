// export const Currency = [
//     {
//         value: "",
//         label: "None"
//     }, {
//         value: "USD",
//         label: "United State Dollor (USD)"
//     }, {
//         value: "CAD",
//         label: "Canadian Dollar (CAD)"
//     }, {
//         value: "MXN",
//         label: "mexican Peso (MXN)"
//     },
// ];
import crypto from 'crypto';

function hashgen(){
  let hash = crypto.getHashes(); 
  
  // Create hash of SHA1 type 
  let x =  Math.random().toString(36).substring(7);
  
  // 'digest' is the output of hash function containing 
  // only hexadecimal digits 
  let hashcode  = crypto.createHash('sha1').update(x).digest('hex'); 
  return hashcode
  }
  
export const  Common_JsonData = {
  Currency: [
    {
      value: "",
      label: "None"
    }, {
      value: "USD",
      label: "United State Dollor (USD)"
    }, {
      value: "CAD",
      label: "Canadian Dollar (CAD)"
    }, {
      value: "MXN",
      label: "mexican Peso (MXN)"
    },
  ],
  EntitryType: [
    { value: "Carrier (Mex)", label: 'Carrier (Mex)' },
    { value: "Carrier (USA)", label: 'Carrier (USA)' },
    { value: "Commercial", label: 'Commercial' },
    { value: "Consortium (Support Admin)", label: 'Consortium (Support Admin)' },
    { value: "Customs Agent", label: 'Customs Agent' },
    { value: "End Buyer", label: 'End Buyer' },
    { value: "Exporter", label: 'Exporter' },
    { value: "Govt (Managerial)", label: 'Govt (Managerial)' },
    { value: "Importer", label: 'Importer' },
    { value: "Oil Well", label: 'Oil Well' },
    { value: "Refinery", label: 'Refinery' },
    { value: "Storage Tank (Mex)", label: 'Storage Tank (Mex)' },
    { value: "Storage Tank (USA)", label: 'Storage Tank (USA)' },
    { value: "Terminal (Mex)", label: 'Terminal (Mex)' },
    { value: "Terminal (USA)", label: 'Terminal (USA)' },
    { value: "Transloader (Mex)", label: 'Transloader (Mex)' },
    { value: "Transloader (USA)", label: 'Transloader (USA)' },
    { value: "Other", label: 'Other' },
  ],
  productCategory: [{
    value: "",
    label: "None"
  },
  {
    value: "Downstream",
    label: "Downstream"
  },
 ],
  subCategory: [{
    value: "",
    label: "None",
    productCategory: ""
  }, 
  {
    value: "Crude Oil",
    label: "Crude Oil",
    productCategory: "Downstream"
  },
  {
    value: "Natural Gas",
    label: "Natural Gas",
    productCategory: "Downstream"
  }],
  measuringUnit: [{
    value: "",
    label: "None"
  }, 
  {
    value: "Cubic feet",
    label: "Cubic feet"
  }, 
  {
    value: "Barrels (bbl)",
    label: "Barrels (bbl)"
  }],
  productStatus: [{
    value: "",
    label: "None"
  }, 
  {
    value: "Active",
    label: "Active"
  }, 
  {
    value: "Inactive",
    label: "Inactive"
  }],
  vendorAcctGrp: [
    {
      value: "",
      label: "None"
    },
    {
      value: "10",
      label: "Account Group1"
    },
    {
      value: "20",
      label: "Account Group2"
    }
  ],
  bankPartnerType: [
    {
      value: "",
      label: "None"
    },
    {
      value: "IMF",
      label: "IMF"
    },
    {
      value: "WB",
      label: "WB"
    },

  ],
  orederTrackingRequestDetails: {
    data: [
      {
        orderName: "CFEnergia power",
        RequestedBy: "James Robert",
        Owner: "yes",
        Status: "AutoApproved",
        RequestTimings: "08/20/2019 10:00 AM",
        Approvereject: "Approve"
      },
      {
        orderName: "BP Gas station",
        RequestedBy: "JackJacob",
        Owner: "No",
        Status: "Rejected",
        RequestTimings: "08/20/2019 10:10AM",
        Approvereject: ""
      },
      {
        orderName: "Pemex Gas station",
        RequestedBy: "Thomas Noah",
        Owner: "No",
        Status: "Approved",
        RequestTimings: "08/20/2019 11:00AM",
        Approvereject: "Approve"
      },
      {
        orderName: "CFEnergia power",
        RequestedBy: "Michael William",
        Owner: "No",
        Status: "NewRequest",
        RequestTimings: "08/20/2019 12:00 PM",
        Approvereject: "Reject"
      }
    ]
  },
  userRole:[
    {_id:'0',role:"Adimin"},
    {_id:'1',role:"Level - 1"},
    {_id:'2',role:"Level - 2"},
    {_id:'3',role:"Supervisor"},

  ],
  screenNames: [
    {_id:'0',role:"RFQ"},
    {_id:'1',role:"PO"},
    {_id:'2',role:"User Profile"},
    {_id:'3',role:"Supervisor"},
  ],

  orderTrackingDetails: {
    list: [
      {
        "poNumber": 20133,
        "productName": "Oil",
        "supplierName": "Energroup",
        "orderTrackingStatus": "Approved",
        "orderTrackingStatus": ""

      },
      {
        "poNumber": 20134,
        "productName": "Gas",
        "supplierName": "murali",
        "orderTrackingStatus": "Request Submitted",
        "orderTrackingStatus": ""
      },
      {
        "poNumber": 20135,
        "productName": "Gas",
        "supplierName": "Pemex",
        "orderTrackingStatus": "",
        "orderTrackingStatus": ""
      }
    ],
    progressData: [
      {
        "orderno": 201333,
        "txno": "1756422245648721",
        "eta": "08/20/219 04:00 PM",
        "orderPercentage": 25
      },
      {
        "orderno": 201334,
        "txno": "1756422245648722",
        "eta": "12/20/219 09:00 AM",
        "orderPercentage": 50
      },
      {
        "orderno": 201339,
        "txno": "1756422245648723",
        "eta": "09/20/219 11:00 AM",
        "orderPercentage": 95
      }],
     
  },
  

  blackChainTranHistory_GS_1: {
    info_list:[
    {
      "TxnId" : "ENE-CER-100",
      "OrderId" : "PO-100",      
      "Type" : "PO",
      "Initiator" : "G500",
      "Receiver" : "Certum",
      "Product" : "Premium-92",     
      "Status" : "Order Delivered",
      "Date" : "01/07/2020 20:05:36 UTC",
      "documentValidation":true,
      "TxnHashDetails" : "Show  Report"      
   },
   
    {
      "TxnId" : "ENE-CER-120",
      "OrderId" : "PO-101",
       "Type" : "SO",
      "Initiator" : "Pemex",
      "Receiver" : "G500",
      "Product" : "Regular-87",     
      "Status" : "Order Accepted",
      "Date" : "01/08/2020 20:05:36 UTC",
      "documentValidation":true,
      "TxnHashDetails" : "Show  Report"
   },
   
    {
     
      "TxnId" : "ENE-CER-125",
      "OrderId" : "PO-178",
       "Type" : "PO",
      "Initiator" : "Pemex",
      "Receiver" : "Flagship",
      "Product" : "Regular-87",     
      "Status" : "Order Placed",
      "Date" : "01/09/2020 20:05:36 UTC",
      "documentValidation":true,
      "TxnHashDetails" : "Show  Report"
   },
   {
     
    "TxnId" : "ENE-CER-126",
    "OrderId" : "PO-179",
     "Type" : "PO",
    "Initiator" : "Pemex",
    "Receiver" : "Flagship",
    "Product" : "Regular-87",     
    "Status" : "Order Placed",
    "Date" : "01/09/2020 22:05:36 UTC",
    "documentValidation":false,
    "TxnHashDetails" : "Show  Report"
 },
  

   ]
  },
  blackChainTranHistory_GS_1_ES: {
    info_list:[
    {
      "TxnId" : "ENE-CER-100",
      "OrderId" : "PO-100",      
      "Type" : "PO",
      "Initiator" : "G500",
      "Receiver" : "Certum",
      "Product" : "Premium-92",     
      "Status" : "Pedido entregado",
      "Date" : "01/07/2020 20:05:36 UTC",
      "documentValidation":true,
      "TxnHashDetails" : "Mostrar reporte"      
   },
   
    {
      "TxnId" : "ENE-CER-120",
      "OrderId" : "PO-101",
       "Type" : "SO",
      "Initiator" : "Pemex",
      "Receiver" : "G500",
      "Product" : "Regular-87",     
      "Status" : "Orden Aceptada",
      "Date" : "01/08/2020 20:05:36 UTC",
      "documentValidation":true,
      "TxnHashDetails" : "Mostrar reporte"
   },
   
    {
     
      "TxnId" : "ENE-CER-125",
      "OrderId" : "PO-178",
       "Type" : "PO",
      "Initiator" : "Pemex",
      "Receiver" : "Flagship",
      "Product" : "Regular-87",     
      "Status" : "Pedido realizado",
      "Date" : "01/09/2020 20:05:36 UTC",
      "documentValidation":true,
      "TxnHashDetails" : "Mostrar reporte"
   },
   {
   "TxnId" : "ENE-CER-126",
   "OrderId" : "PO-179",
    "Type" : "PO",
   "Initiator" : "Pemex",
   "Receiver" : "Flagship",
   "Product" : "Regular-87",     
   "Status" : "Pedido realizado",
   "Date" : "01/09/2020 22:05:36 UTC",
   "documentValidation":false,
   "TxnHashDetails" : "Mostrar reporte"
   }

   ]
  },
  blackChainTranHistory_TPB_1: {
    info_list:[
    {
      "TxnId" : "TPB-CER-100",
      "OrderId" : "PO-100",      
      "Type" : "PO",
      "Initiator" : "TPB",
      "Receiver" : "Certum",
      "Product" : "Premium-92",     
      "Status" : "Order Delivered",
      "Date" : "01/07/2020 20:05:36 UTC",
      "documentValidation":true,
      "TxnHashDetails" : "Show  Report"      
   },
   
    {
      "TxnId" : "TPB-CER-120",
      "OrderId" : "PO-101",
       "Type" : "SO",
      "Initiator" : "Pemex",
      "Receiver" : "TPB",
      "Product" : "Regular-87",     
      "Status" : "Order Accepted",
      "Date" : "01/08/2020 20:05:36 UTC",
      "documentValidation":true,
      "TxnHashDetails" : "Show  Report"
   },
   
    {
     
      "TxnId" : "TPB-CER-125",
      "OrderId" : "PO-178",
       "Type" : "PO",
      "Initiator" : "Pemex",
      "Receiver" : "Flagship",
      "Product" : "Regular-87",     
      "Status" : "Order Placed",
      "Date" : "01/09/2020 20:05:36 UTC",
      "documentValidation":true,
      "TxnHashDetails" : "Show  Report"
   },
   {
     
    "TxnId" : "TPB-CER-126",
    "OrderId" : "PO-179",
     "Type" : "PO",
    "Initiator" : "Pemex",
    "Receiver" : "Flagship",
    "Product" : "Regular-87",     
    "Status" : "Order Placed",
    "Date" : "01/09/2020 22:05:36 UTC",
    "documentValidation":false,
    "TxnHashDetails" : "Show  Report"
 },
  

   ]
  },
  blackChainTranHistory_TPB_1_ES: {
    info_list:[
    {
      "TxnId" : "TPB-CER-100",
      "OrderId" : "PO-100",      
      "Type" : "PO",
      "Initiator" : "TPB",
      "Receiver" : "Certum",
      "Product" : "Premium-92",     
      "Status" : "Pedido entregado",
      "Date" : "01/07/2020 20:05:36 UTC",
      "documentValidation":true,
      "TxnHashDetails" : "Mostrar reporte"      
   },
   
    {
      "TxnId" : "TPB-CER-120",
      "OrderId" : "PO-101",
       "Type" : "SO",
      "Initiator" : "Pemex",
      "Receiver" : "TPB",
      "Product" : "Regular-87",     
      "Status" : "Orden aceptada",
      "Date" : "01/08/2020 20:05:36 UTC",
      "documentValidation":true,
      "TxnHashDetails" : "Mostrar reporte"
   },
   
    {
     
      "TxnId" : "TPB-CER-125",
      "OrderId" : "PO-178",
       "Type" : "PO",
      "Initiator" : "Pemex",
      "Receiver" : "Flagship",
      "Product" : "Regular-87",     
      "Status" : "Pedido realizado",
      "Date" : "01/09/2020 20:05:36 UTC",
      "documentValidation":true,
      "TxnHashDetails" : "Mostrar reporte"
   },
   {
     
    "TxnId" : "TPB-CER-126",
    "OrderId" : "PO-179",
     "Type" : "PO",
    "Initiator" : "Pemex",
    "Receiver" : "Flagship",
    "Product" : "Regular-87",     
    "Status" : "Pedido realizado",
    "Date" : "01/09/2020 22:05:36 UTC",
    "documentValidation":false,
    "TxnHashDetails" : "Mostrar reporte"
 },
  
   ]
  },
  // blackChainTranHistory_GS_2: {
  //   info_list:[
  //     {
  //       "Txn_Id" : "ENE-CFE-000005",
  //       "Asset_Id" : "3403de7f1f38",
        
  //       "Product_Id" : "Diesel",
  //       "channel_Id" : "COM-BUY",
  //       "Creation_Time" : "2019-12-18T15:45:22.572Z",
  //       "block_no" : "11",     
  //       "age" : "15 min ago",
  //       "from" : "Energroup",
  //       "to" : "G500-Multiservicios,Allende,Nuevo Leon,Mexico",
  //       //"Txn_Hash": "90987bd1a555d05b6254ef88920c1400e31c372d856747608a1549bde5610b967"
  //       "Txn_Hash": hashgen()
  //    },
  //   {
  //     "Txn_Id" : "ENE-CFE-000004",
  //     "Asset_Id" : "3403de7f1f38",
      
  //     "Product_Id" : "Diesel",
  //     "channel_Id" : "COM-BUY",
  //     "Creation_Time" : "2019-12-18T15:30:22.572Z",
  //     "block_no" : "10",     
  //     "age" : "30 min ago",
  //     "from" : "Energroup",
  //     "to" : "G500-Multiservicios,Allende,Nuevo Leon,Mexico",
  //    //"Txn_Hash": "bb26bd1a555d05b6254ef88920c1400e31c372d856747608a1549bde4210b841"
  //    "Txn_Hash": hashgen()
  //  },
   
  //   {
  //     "Txn_Id" : "ENE-CFE-000003",
  //     "Asset_Id" : "3403de7f1f38",
      
  //     "Product_Id" : "Diesel",
  //     "channel_Id" :"COM-BUY",
  //     "Creation_Time" : "2019-12-15T14:00:22.572Z",
  //     "block_no" : "5",     
  //     "age" : "45 min ago",
  //     "from" : "Energroup",
  //     "to" : "G500-Multiservicios,Allende,Nuevo Leon,Mexico",
  //    //"Txn_Hash": "7942594f536fb2000cc271e70c160f594e1892d494a99caebd77faae2502000c"
  //    "Txn_Hash": hashgen()
  //  },
   
  //   {
     
  //     "Txn_Id" :  "ENE-CFE-000002",
  //     "Asset_Id" : "3403de7f1f38",
     
  //     "Product_Id" : "Premium",
  //     "channel_Id" :"COM-BUY",
  //     "Creation_Time" : "2019-12-16T16:45:22.572Z",
  //     "block_no" : "4",     
  //     "age" : "50 min ago",
  //     "from" : "Energroup,Carr Nacional 5000, La Estanzuela, 64988 Monterrey, N.L., Mexico",
  //     "to" : "G500-Multiservicios,Allende,Nuevo Leon,Mexico",
  //    //"Txn_Hash": "7287752db089ad7100a010f46adca2efebce3212469c99a092b72fdfe8d50e04"
  //    "Txn_Hash": hashgen()
       
  //  },
  
  //   {
  //     "Txn_Id" :"ENE-CFE-000001",
  //     "Asset_Id" : "3403de7f1f38",
     
  //     "Product_Id" : "Premium",
  //     "channel_Id" :"COM-BUY",
  //     "Creation_Time" : "2019-12-15T13:05:22.572Z",
  //     "block_no" : "3",     
  //     "age" : "1 hour 30 min ago",
  //     "from" : "Energroup,Carr Nacional 5000, La Estanzuela, 64988 Monterrey, N.L., Mexico",
  //     "to" : "G500-Multiservicios,Allende,Nuevo Leon,Mexico",
  //    //"Txn_Hash": "66a21e0b1cbd491491c51650cc1fa751ee03c75efd7693f7100a1478186661bd"
  //    "Txn_Hash": hashgen()
      
  //   }

  //  ]
  // },
  blackChainTranHistory_AC_1: {
    info_list:[
    {
      "Txn_Id" : "ENE-TPB-000014",
      "Asset_Id" : "7804732cd91a",
      
      "Product_Id" : "Diesel",
      "channel_Id" : "COM-BUY",
      "Creation_Time" : "2019-12-18T15:30:22.572Z",
      "block_no" : "55",     
      "age" : "30 min ago",
      "from" : "Energroup,Carr Nacional 5000, La Estanzuela, 64988 Monterrey, N.L., Mexico",
      "to" : "TPB-Transportes PeÒon Blanco, S.A. de C.V,Guadalupe,Nuevo Leon,Mexico",
     //"Txn_Hash": "c645f78ed6ac481717124f93e770f618263bd72976c5b8a74bab3d90e3b7a2b6"
     "Txn_Hash": hashgen()
   },
   
    {
      "Txn_Id" : "ENE-TPB-000013",
      "Asset_Id" : "7804732cd91a",
      
      "Product_Id" : "Diesel",
      "channel_Id" :"COM-BUY",
      "Creation_Time" : "2019-12-15T14:00:22.572Z",
      "block_no" : "35",     
      "age" : "45 min ago",
      "from" : "Energroup,Carr Nacional 5000, La Estanzuela, 64988 Monterrey, N.L., Mexico",
      "to" : "TPB-Transportes PeÒon Blanco, S.A. de C.V,Guadalupe,Nuevo Leon,Mexico",
     //"Txn_Hash": "a1ed48aa0e80c41d71e8203d4faa9f75c17c886650e0fb9a062c4802ec4597d8"
     "Txn_Hash": hashgen()
      
       
   },
   
    {
     
      "Txn_Id" :  "ENE-TPB-000012",
      "Asset_Id" : "7804732cd91a",
      
      "Product_Id" : "Diesel",
      "channel_Id" :"COM-BUY",
      "Creation_Time" : "2019-12-16T16:45:22.572Z",
      "block_no" : "32",     
      "age" : "50 min ago",
      "from" : "Energroup,Carr Nacional 5000, La Estanzuela, 64988 Monterrey, N.L., Mexico",
      "to" : "TPB-Transportes PeÒon Blanco, S.A. de C.V,Guadalupe,Nuevo Leon,Mexico",
     //"Txn_Hash": "3df6c57e5d5393e4a74312c4665f71d3d14968861daa739db56b38c004392c6c"
     "Txn_Hash": hashgen()
       
   },
  
    {
      "Txn_Id" :"ENE-TPB-000011",
      "Asset_Id" : "7804732cd91a",
     
      "Product_Id" : "Diesel",
      "channel_Id" :"COM-BUY",
      "Creation_Time" : "2019-12-15T13:05:22.572Z",
      "block_no" : "27",     
      "age" : "1 hour 30 min ago",
      "from" : "Energroup,Carr Nacional 5000, La Estanzuela, 64988 Monterrey, N.L., Mexico",
      "to" : "TPB-Transportes PeÒon Blanco, S.A. de C.V,Guadalupe,Nuevo Leon,Mexico",
     //"Txn_Hash": "20455b3d447355caf84686713c62431762f328ae47b16e93f58eb8c546c96372"
      
     "Txn_Hash": hashgen()
    },

   ]
  },
  // blackChainTranHistory_AC_2: {
  //   info_list:[
  //     {
  //       "Txn_Id" : "ENE-TPB-000015",
  //       "Asset_Id" : "7804732cd91a",
       
  //       "Product_Id" : "Diesel",
  //       "channel_Id" : "COM-BUY",
  //       "Creation_Time" : "2019-12-18T15:45:22.572Z",
  //       "block_no" : "67",     
  //       "age" : "15 min ago",
  //       "from" : "Energroup",
  //       "to" : "TPB",
  //       //"Txn_Hash": "abhj5f78ed6ac481717124f93e770f618263bd72976c5b8a74bab3d90e3b7a5gt"
  //       "Txn_Hash": hashgen()
  //    },
  //   {
  //     "Txn_Id" : "ENE-TPB-000014",
  //     "Asset_Id" : "7804732cd91a",
      
  //     "Product_Id" : "Diesel",
  //     "channel_Id" : "COM-BUY",
  //     "Creation_Time" : "2019-12-18T15:30:22.572Z",
  //     "block_no" : "55",     
  //     "age" : "30 min ago",
  //     "from" : "Energroup",
  //     "to" : "TPB",
  //    //"Txn_Hash": "c645f78ed6ac481717124f93e770f618263bd72976c5b8a74bab3d90e3b7a2b6"
  //    "Txn_Hash": hashgen()
  //  },
   
  //   {
  //     "Txn_Id" : "ENE-TPB-000013",
  //     "Asset_Id" : "7804732cd91a",
      
  //     "Product_Id" : "Diesel",
  //     "channel_Id" :"COM-BUY",
  //     "Creation_Time" : "2019-12-15T14:00:22.572Z",
  //     "block_no" : "32",     
  //     "age" : "45 min ago",
  //     "from" : "Energroup",
  //     "to" : "TPB",
  //    //"Txn_Hash": "a1ed48aa0e80c41d71e8203d4faa9f75c17c886650e0fb9a062c4802ec4597d8"
  //    "Txn_Hash": hashgen()
  //  },
   
  //   {
     
  //     "Txn_Id" :  "ENE-TPB-000012",
  //     "Asset_Id" : "7804732cd91a",
      
  //     "Product_Id" : "Diesel",
  //     "channel_Id" :"COM-BUY",
  //     "Creation_Time" : "2019-12-16T16:45:22.572Z",
  //     "block_no" : "27",     
  //     "age" : "50 min ago",
  //     "from" : "Energroup",
  //     "to" : "TPB",
  //    //"Txn_Hash": "3df6c57e5d5393e4a74312c4665f71d3d14968861daa739db56b38c004392c6c"
  //    "Txn_Hash": hashgen()
       
  //  },
  
  //   {
  //     "Txn_Id" :"ENE-TPB-000011",
  //     "Asset_Id" : "3403de7f1f38",
     
  //     "Product_Id" : "Diesel",
  //     "channel_Id" :"COM-BUY",
  //     "Creation_Time" : "2019-12-15T13:05:22.572Z",
  //     "block_no" : "3",     
  //     "age" : "1 hour 30 min ago",
  //     "from" : "Energroup",
  //     "to" : "TPB",
  //    //"Txn_Hash": "20455b3d447355caf84686713c62431762f328ae47b16e93f58eb8c546c96372"
  //    "Txn_Hash": hashgen()
      
      
  //   }

  //  ]
  // },
  // blackChainTranHistory_OW_1: {
  //   info_list:[
  //   {
  //     "Txn_Id" : "PEM-TPB-000009",
  //     "Asset_Id" : "76804732cd75h",
      
  //     "Product_Id" : "Crude Oil",
  //     "channel_Id" : "COM-BUY",
  //     "Creation_Time" : "2019-12-18T15:30:22.572Z",
  //     "block_no" : "98",     
  //     "age" : "30 min ago",
  //     "from" : "PEMEX",
  //     "to" : "TPB",
  //    //"Txn_Hash": "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb"
  //    "Txn_Hash": hashgen()
  //  },
   
  //   {
  //     "Txn_Id" : "PEM-TPB-000008",
  //     "Asset_Id" : "76804732cd75h",
      
  //     "Product_Id" : "Crude Oil",
  //     "channel_Id" :"COM-BUY",
  //     "Creation_Time" : "2019-12-15T14:00:22.572Z",
  //     "block_no" : "90",     
  //     "age" : "45 min ago",
  //     "from" : "PEMEX",
  //     "to" : "TPB",
  //    //"Txn_Hash": "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"
  //    "Txn_Hash": hashgen()
      
       
  //  },
   
  //   {
     
  //     "Txn_Id" :  "PEM-TPB-000007",
  //     "Asset_Id" : "76804732cd75h",
      
  //     "Product_Id" : "Crude Oil",
  //     "channel_Id" :"COM-BUY",
  //     "Creation_Time" : "2019-12-16T16:45:22.572Z",
  //     "block_no" : "81",     
  //     "age" : "50 min ago",
  //     "from" : "PEMEX",
  //     "to" : "TPB",
  //    //"Txn_Hash": "4c94485e0c21ae6c41ce1dfe7b6bfaceea5ab68e40a2476f50208e526f506080"
  //    "Txn_Hash": hashgen() 
  //  },
  
  //   {
  //     "Txn_Id" :"PEM-TPB-000006",
  //     "Asset_Id" : "76804732cd75h",
    
  //     "Product_Id" : "Crude Oil",
  //     "channel_Id" :"COM-BUY",
  //     "Creation_Time" : "2019-12-15T13:05:22.572Z",
  //     "block_no" : "76",     
  //     "age" : "1 hour 30 min ago",
  //     "from" : "PEMEX",
  //     "to" : "TPB",
  //    //"Txn_Hash": "0bfe935e70c321c7ca3afc75ce0d0ca2f98b5422e008bb31c00c6d7f1f1c0ad6"
  //    "Txn_Hash": hashgen()
      
  //   },

  //  ]
  // },
  // blackChainTranHistory_OW_2: {
  //   info_list:[
  //     {
  //       "Txn_Id" : "PEM-TPB-000010",
  //       "Asset_Id" : "76804732cd75h",
       
  //       "Product_Id" : "Diesel",
  //       "channel_Id" : "COM-BUY",
  //       "Creation_Time" : "2019-12-18T15:45:22.572Z",
  //       "block_no" : "109",     
  //       "age" : "15 min ago",
  //       "from" : "PEMEX",
  //       "to" : "TPB",
  //       "Txn_Hash": "456978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee4908"
  //    },
  //   {
  //     "Txn_Id" : "PEM-TPB-000009",
  //     "Asset_Id" : "76804732cd75h",
      
  //     "Product_Id" : "Diesel",
  //     "channel_Id" : "COM-BUY",
  //     "Creation_Time" : "2019-12-18T15:30:22.572Z",
  //     "block_no" : "98",     
  //     "age" : "30 min ago",
  //     "from" : "PEMEX",
  //     "to" : "TPB",
  //    "Txn_Hash": "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb"
  //  },
   
  //   {
  //     "Txn_Id" : "PEM-TPB-000008",
  //     "Asset_Id" : "76804732cd75h",
     
  //     "Product_Id" : "Diesel",
  //     "channel_Id" :"COM-BUY",
  //     "Creation_Time" : "2019-12-15T14:00:22.572Z",
  //     "block_no" : "90",     
  //     "age" : "45 min ago",
  //     "from" : "PEMEX",
  //     "to" : "TPB",
  //    "Txn_Hash": "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"
  //  },
   
  //   {
     
  //     "Txn_Id" :  "PEM-TPB-000007",
  //     "Asset_Id" : "76804732cd75h",
      
  //     "Product_Id" : "Diesel",
  //     "channel_Id" :"COM-BUY",
  //     "Creation_Time" : "2019-12-16T16:45:22.572Z",
  //     "block_no" : "81",     
  //     "age" : "50 min ago",
  //     "from" : "PEMEX",
  //     "to" : "TPB",
  //    "Txn_Hash": "4c94485e0c21ae6c41ce1dfe7b6bfaceea5ab68e40a2476f50208e526f506080"
       
  //  },
  
  //   {
  //     "Txn_Id" :"PEM-TPB-000006",
  //     "Asset_Id" : "76804732cd75h",
     
  //     "Product_Id" : "Diesel",
  //     "channel_Id" :"COM-BUY",
  //     "Creation_Time" : "2019-12-15T13:05:22.572Z",
  //     "block_no" : "76",     
  //     "age" : "1 hour 30 min ago",
  //     "from" : "PEMEX",
  //     "to" : "TPB",
  //    "Txn_Hash": "0bfe935e70c321c7ca3afc75ce0d0ca2f98b5422e008bb31c00c6d7f1f1c0ad6"
      
      
  //   }

  //  ]
  // }
}

//module.exports = { Common_JsonData };
export default Common_JsonData;
