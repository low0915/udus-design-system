(function (global) {
  'use strict';
  const names = Object.freeze({"Picking": "picking", "Stock Count": "stock-count", "Packing": "packing", "Putaway": "putaway", "Location Transfer": "location-transfer", "Quotation": "quotation", "Sales Order": "sales-order", "Goods Delivery": "goods-delivery", "Sales Return": "sales-return", "Sales Return Receiving": "sales-return-receiving", "Sales Invoice": "sales-invoice", "Customer Payments": "customer-payments", "Item Balance": "item-balance", "Miscellaneous Issue": "miscellaneous-issue", "Miscellaneous Receipt": "miscellaneous-receipt", "Category Transfer": "category-transfer", "Inventory Movement": "inventory-movement", "Plant Transfer": "plant-transfer", "Purchase Invoice": "purchase-invoice", "Purchase Return": "purchase-return", "Purchase Order": "purchase-order", "Purchase Requisition": "purchase-requisition", "Goods Receiving": "goods-receiving", "Item Assembly": "item-assembly", "Item Disassembly": "item-disassembly"});
  function ModuleIcon(props) {
    const {name, background = 'with', theme = 'dark', assetBase = '/sudu/modules', size = 64, alt, ...imageProps} = props;
    const slug = names[name] || (Object.values(names).includes(name) ? name : null);
    if (!slug) throw new Error('Unknown SuDu module icon: ' + name);
    if (!['with','without'].includes(background)) throw new Error('background must be with or without');
    if (!['dark','light'].includes(theme)) throw new Error('theme must be dark or light');
    const filename = background === 'with' ? 'with-background.svg' : 'without-background-' + theme + '.svg';
    const label = alt === undefined ? Object.keys(names).find(key => names[key] === slug) : alt;
    return global.React.createElement('img', {...imageProps, src: assetBase.replace(/\/$/, '') + '/' + slug + '/' + filename, width:size, height:size, alt:label});
  }
  global.SuDuModuleIcons = Object.freeze({ModuleIcon, names});
})(window);
