angular.module('stapi').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/anotacao/html/anotacaoDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$anotacaoDetalheCtrl.data.saveFunction($anotacaoDetalheCtrl.data.item)\" delete-function=\"$anotacaoDetalheCtrl.data.deleteFunction($anotacaoDetalheCtrl.data.item)\" item=\"$anotacaoDetalheCtrl.data.item\" cancel-function=\"$anotacaoDetalheCtrl.data.cancelFunction()\" loading=\"$anotacaoDetalheCtrl.data.loading\" title=\"{{$anotacaoDetalheCtrl.data.item.titulo || 'Cadastro de novo Item'}}\"><anotacao-form></anotacao-form></st-detalhe>"
  );


  $templateCache.put('app/anotacao/html/anotacaoForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"70\" label=\"Título\" ng-model=\"$anotacaoDetalheCtrl.data.item.titulo\"></st-input-string><st-input-string flex=\"30\" label=\"Categoria\" ng-model=\"$anotacaoDetalheCtrl.data.item.categoria\"></st-input-string><md-input-container flex=\"100\" class=\"md-block\"><label>Conteúdo</label><textarea ng-model=\"$anotacaoDetalheCtrl.data.item.descricao\" rows=\"30\" md-select-on-focus></textarea></md-input-container></div>"
  );


  $templateCache.put('app/anotacao/html/anotacaoGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $anotacaoListCtrl.data.objetos\"><st-grid-item icon=\"person\" item=\"item\" label=\"{{item._string.nome}}\" delete-function=\"$anotacaoListCtrl.data.deleteFunction([item.id])\" open-detail=\"$anotacaoListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/anotacao/html/anotacaoList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$anotacaoListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$anotacaoListCtrl.data.requestListParams\" get-list=\"$anotacaoListCtrl.data.getList\" filtros=\"$anotacaoListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo anotacao\" ng-click=\"$anotacaoListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$anotacaoListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$anotacaoListCtrl.data.deleteFunction($anotacaoListCtrl.data.getSelectedItemsIds())\" selected-items=\"$anotacaoListCtrl.data.selectedItems\"></st-selected-items-actions><anotacao-grid-view ng-show=\"config.confs.viewType=='grid'\"></anotacao-grid-view><anotacao-table-view ng-show=\"config.confs.viewType=='table'\"></anotacao-table-view><div ng-if=\"$anotacaoListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$anotacaoListCtrl.data.totalItens\" itens-in-page=\"$anotacaoListCtrl.data.objetos.length\" get-list=\"$anotacaoListCtrl.data.getList\" query-options=\"$anotacaoListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/anotacao/html/anotacaoTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$anotacaoListCtrl.data.tableColumns\" open-detail=\"$anotacaoListCtrl.data.openDetail\" order-by=\"$anotacaoListCtrl.data.orderBy\" delete-function=\"$anotacaoListCtrl.data.deleteFunction\" selected-items=\"$anotacaoListCtrl.data.selectedItems\" items=\"$anotacaoListCtrl.data.objetos\" edit-column=\"$anotacaoListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/artigo/html/artigoDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$artigoDetalheCtrl.data.saveFunction($artigoDetalheCtrl.data.item)\" delete-function=\"$artigoDetalheCtrl.data.deleteFunction($artigoDetalheCtrl.data.item)\" item=\"$artigoDetalheCtrl.data.item\" cancel-function=\"$artigoDetalheCtrl.data.cancelFunction()\" loading=\"$artigoDetalheCtrl.data.loading\" title=\"{{$artigoDetalheCtrl.data.item.titulo || 'Cadastro de novo Item'}}\"><artigo-form></artigo-form></st-detalhe>"
  );


  $templateCache.put('app/artigo/html/artigoForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Título do artigo\" ng-model=\"$artigoDetalheCtrl.data.item.titulo\"></st-input-string></div>"
  );


  $templateCache.put('app/artigo/html/artigoGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $artigoListCtrl.data.objetos\"><st-grid-item icon=\"text_format\" item=\"item\" label=\"{{item.titulo}}\" delete-function=\"$artigoListCtrl.data.deleteFunction([item.id])\" open-detail=\"$artigoListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/artigo/html/artigoList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$artigoListCtrl.data.openDetail()\"><ng-md-icon icon=\"add\"></ng-md-icon>Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$artigoListCtrl.data.requestListParams\" get-list=\"$artigoListCtrl.data.getList\" filtros=\"$artigoListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo artigo\" ng-click=\"$artigoListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$artigoListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$artigoListCtrl.data.deleteFunction($artigoListCtrl.data.getSelectedItemsIds())\" selected-items=\"$artigoListCtrl.data.selectedItems\"></st-selected-items-actions><artigo-grid-view ng-show=\"config.confs.viewType=='grid'\"></artigo-grid-view><artigo-table-view ng-show=\"config.confs.viewType=='table'\"></artigo-table-view><div ng-if=\"$artigoListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$artigoListCtrl.data.totalItens\" itens-in-page=\"$artigoListCtrl.data.objetos.length\" get-list=\"$artigoListCtrl.data.getList\" query-options=\"$artigoListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/artigo/html/artigoTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$artigoListCtrl.data.tableColumns\" open-detail=\"$artigoListCtrl.data.openDetail\" order-by=\"$artigoListCtrl.data.orderBy\" delete-function=\"$artigoListCtrl.data.deleteFunction\" selected-items=\"$artigoListCtrl.data.selectedItems\" items=\"$artigoListCtrl.data.objetos\" edit-column=\"$artigoListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/avaliacaopapel/html/avaliacaopapelDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$avaliacaopapelDetalheCtrl.data.saveFunction($avaliacaopapelDetalheCtrl.data.item)\" delete-function=\"$avaliacaopapelDetalheCtrl.data.deleteFunction($avaliacaopapelDetalheCtrl.data.item)\" item=\"$avaliacaopapelDetalheCtrl.data.item\" cancel-function=\"$avaliacaopapelDetalheCtrl.data.cancelFunction()\" loading=\"$avaliacaopapelDetalheCtrl.data.loading\" title=\"{{$avaliacaopapelDetalheCtrl.data.item._string.nome || 'Cadastro de novo Item'}}\"><avaliacaopapel-form></avaliacaopapel-form></st-detalhe>"
  );


  $templateCache.put('app/avaliacaopapel/html/avaliacaopapelForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Nome do avaliacaopapel\" ng-model=\"$avaliacaopapelDetalheCtrl.data.item._string.nome\"></st-input-string><md-divider></md-divider><st-input-string flex=\"30\" flex-xs=\"100\" label=\"Atributo 2\" ng-model=\"$avaliacaopapelDetalheCtrl.data.item._string.atributo2\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 3\" ng-model=\"$avaliacaopapelDetalheCtrl.data.item._string.atributo3\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 4\" ng-model=\"$avaliacaopapelDetalheCtrl.data.item._string.atributo4\"></st-input-string><md-divider></md-divider><st-input-double flex=\"20\" flex-xs=\"100\" label=\"Preço da hora\" ng-model=\"$avaliacaopapelDetalheCtrl.data.item._double.precoHora\"></st-input-double></div>"
  );


  $templateCache.put('app/avaliacaopapel/html/avaliacaopapelGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $avaliacaopapelListCtrl.data.objetos\"><st-grid-item icon=\"person\" item=\"item\" label=\"{{item._string.nome}}\" delete-function=\"$avaliacaopapelListCtrl.data.deleteFunction([item.id])\" open-detail=\"$avaliacaopapelListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/avaliacaopapel/html/avaliacaopapelList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$avaliacaopapelListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$avaliacaopapelListCtrl.data.requestListParams\" get-list=\"$avaliacaopapelListCtrl.data.getList\" filtros=\"$avaliacaopapelListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo avaliacaopapel\" ng-click=\"$avaliacaopapelListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$avaliacaopapelListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$avaliacaopapelListCtrl.data.deleteFunction($avaliacaopapelListCtrl.data.getSelectedItemsIds())\" selected-items=\"$avaliacaopapelListCtrl.data.selectedItems\"></st-selected-items-actions><avaliacaopapel-grid-view ng-show=\"config.confs.viewType=='grid'\"></avaliacaopapel-grid-view><avaliacaopapel-table-view ng-show=\"config.confs.viewType=='table'\"></avaliacaopapel-table-view><div ng-if=\"$avaliacaopapelListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$avaliacaopapelListCtrl.data.totalItens\" itens-in-page=\"$avaliacaopapelListCtrl.data.objetos.length\" get-list=\"$avaliacaopapelListCtrl.data.getList\" query-options=\"$avaliacaopapelListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/avaliacaopapel/html/avaliacaopapelTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$avaliacaopapelListCtrl.data.tableColumns\" label=\"$avaliacaopapelListCtrl.data.changeAttr\" open-detail=\"$avaliacaopapelListCtrl.data.openDetail\" order-by=\"$avaliacaopapelListCtrl.data.orderBy\" delete-function=\"$avaliacaopapelListCtrl.data.deleteFunction\" selected-items=\"$avaliacaopapelListCtrl.data.selectedItems\" items=\"$avaliacaopapelListCtrl.data.objetos\" edit-column=\"$avaliacaopapelListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/burndown/html/burndownDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$burndownDetalheCtrl.data.saveFunction($burndownDetalheCtrl.data.item)\" delete-function=\"$burndownDetalheCtrl.data.deleteFunction($burndownDetalheCtrl.data.item)\" item=\"$burndownDetalheCtrl.data.item\" cancel-function=\"$burndownDetalheCtrl.data.cancelFunction()\" loading=\"$burndownDetalheCtrl.data.loading\" title=\"{{$burndownDetalheCtrl.data.item._string.nome || 'Cadastro de novo Item'}}\"><md-tabs md-dynamic-height md-border-bottom><md-tab label=\"Informações\"><md-content class=\"md-padding\"><burndown-form></burndown-form></md-content></md-tab><md-tab label=\"Gráfico\"><md-content class=\"md-padding\" layout=\"row\" layout-padding><canvas chart-colors=\"$burndownDetalheCtrl.burnDownChart.colors\" flex id=\"line\" class=\"chart chart-line\" chart-data=\"$burndownDetalheCtrl.burnDownChart.data\" chart-labels=\"$burndownDetalheCtrl.burnDownChart.labels\" chart-series=\"$burndownDetalheCtrl.burnDownChart.series\"></canvas></md-content></md-tab></md-tabs></st-detalhe>"
  );


  $templateCache.put('app/burndown/html/burndownForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><div flex=\"100\"><ng-md-icon icon=\"calendar\"></ng-md-icon>Data de cadastro: {{$burndownDetalheCtrl.data.item.dataCadastro|date: 'dd/MM/yyyy'}}</div><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Descrição do burndown\" ng-model=\"$burndownDetalheCtrl.data.item.descricao\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Objeto\" ng-model=\"$burndownDetalheCtrl.data.item.objectName\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Order By\" ng-model=\"$burndownDetalheCtrl.data.item.orderBy\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Filtro de label\" ng-model=\"$burndownDetalheCtrl.data.item.labelFilter\"></st-input-string><st-input-string flex=\"100\" flex-xs=\"100\" label=\"Querys\" ng-model=\"$burndownDetalheCtrl.data.item.querys\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Value Column\" ng-model=\"$burndownDetalheCtrl.data.item.valueColumn\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Label Column\" ng-model=\"$burndownDetalheCtrl.data.item.labelColumn\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Period Column\" ng-model=\"$burndownDetalheCtrl.data.item.periodColumn\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Meta\" ng-model=\"$burndownDetalheCtrl.data.item.valueMeta\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Data fim\" ng-model=\"$burndownDetalheCtrl.data.item.dataFim\"></st-input-string></div>"
  );


  $templateCache.put('app/burndown/html/burndownGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $burndownListCtrl.data.objetos\"><st-grid-item icon=\"person\" item=\"item\" label=\"{{item._string.nome}}\" delete-function=\"$burndownListCtrl.data.deleteFunction([item.id])\" open-detail=\"$burndownListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/burndown/html/burndownList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$burndownListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$burndownListCtrl.data.requestListParams\" get-list=\"$burndownListCtrl.data.getList\" filtros=\"$burndownListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo burndown\" ng-click=\"$burndownListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$burndownListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$burndownListCtrl.data.deleteFunction($burndownListCtrl.data.getSelectedItemsIds())\" selected-items=\"$burndownListCtrl.data.selectedItems\"></st-selected-items-actions><burndown-grid-view ng-show=\"config.confs.viewType=='grid'\"></burndown-grid-view><burndown-table-view ng-show=\"config.confs.viewType=='table'\"></burndown-table-view><div ng-if=\"$burndownListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$burndownListCtrl.data.totalItens\" itens-in-page=\"$burndownListCtrl.data.objetos.length\" get-list=\"$burndownListCtrl.data.getList\" query-options=\"$burndownListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/burndown/html/burndownTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$burndownListCtrl.data.tableColumns\" open-detail=\"$burndownListCtrl.data.openDetail\" order-by=\"$burndownListCtrl.data.orderBy\" delete-function=\"$burndownListCtrl.data.deleteFunction\" selected-items=\"$burndownListCtrl.data.selectedItems\" items=\"$burndownListCtrl.data.objetos\" edit-column=\"$burndownListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/buscatransderivacional/html/buscatransderivacionalDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$buscatransderivacionalDetalheCtrl.data.saveFunction($buscatransderivacionalDetalheCtrl.data.item)\" delete-function=\"$buscatransderivacionalDetalheCtrl.data.deleteFunction($buscatransderivacionalDetalheCtrl.data.item)\" item=\"$buscatransderivacionalDetalheCtrl.data.item\" cancel-function=\"$buscatransderivacionalDetalheCtrl.data.cancelFunction()\" loading=\"$buscatransderivacionalDetalheCtrl.data.loading\" title=\"{{$buscatransderivacionalDetalheCtrl.data.item.titulo || 'Cadastro de novo Item'}}\"><buscatransderivacional-form></buscatransderivacional-form></st-detalhe>"
  );


  $templateCache.put('app/buscatransderivacional/html/buscatransderivacionalForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Título\" ng-model=\"$buscatransderivacionalDetalheCtrl.data.item.titulo\"></st-input-string><md-input-container flex=\"100\"><label>Resposta(s)</label><st-string-chip placeholder=\"Inserir resposta\" ng-model=\"$buscatransderivacionalDetalheCtrl.data.item.respostas\"></st-string-chip></md-input-container><div flex=\"100\"><md-checkbox ng-change=\"$buscatransderivacionalDetalheCtrl.data.saveFunction($buscatransderivacionalDetalheCtrl.data.item)\" ng-model=\"$buscatransderivacionalDetalheCtrl.data.item.resolvido\" ng-true-value=\"1\" ng-false-value=\"0\">Resolvido</md-checkbox></div></div>"
  );


  $templateCache.put('app/buscatransderivacional/html/buscatransderivacionalGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $buscatransderivacionalListCtrl.data.objetos\"><st-grid-item icon=\"youtube_searched_for\" item=\"item\" label=\"{{item.titulo}}\" delete-function=\"$buscatransderivacionalListCtrl.data.deleteFunction([item.id])\" open-detail=\"$buscatransderivacionalListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/buscatransderivacional/html/buscatransderivacionalList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$buscatransderivacionalListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$buscatransderivacionalListCtrl.data.requestListParams\" get-list=\"$buscatransderivacionalListCtrl.data.getList\" filtros=\"$buscatransderivacionalListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo buscatransderivacional\" ng-click=\"$buscatransderivacionalListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$buscatransderivacionalListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$buscatransderivacionalListCtrl.data.deleteFunction($buscatransderivacionalListCtrl.data.getSelectedItemsIds())\" selected-items=\"$buscatransderivacionalListCtrl.data.selectedItems\"></st-selected-items-actions><buscatransderivacional-grid-view ng-show=\"config.confs.viewType=='grid'\"></buscatransderivacional-grid-view><buscatransderivacional-table-view ng-show=\"config.confs.viewType=='table'\"></buscatransderivacional-table-view><div ng-if=\"$buscatransderivacionalListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$buscatransderivacionalListCtrl.data.totalItens\" itens-in-page=\"$buscatransderivacionalListCtrl.data.objetos.length\" get-list=\"$buscatransderivacionalListCtrl.data.getList\" query-options=\"$buscatransderivacionalListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/buscatransderivacional/html/buscatransderivacionalTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$buscatransderivacionalListCtrl.data.tableColumns\" open-detail=\"$buscatransderivacionalListCtrl.data.openDetail\" order-by=\"$buscatransderivacionalListCtrl.data.orderBy\" delete-function=\"$buscatransderivacionalListCtrl.data.deleteFunction\" selected-items=\"$buscatransderivacionalListCtrl.data.selectedItems\" items=\"$buscatransderivacionalListCtrl.data.objetos\" edit-column=\"$buscatransderivacionalListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/comportamento/html/comportamentoDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$comportamentoDetalheCtrl.data.saveFunction($comportamentoDetalheCtrl.data.item)\" delete-function=\"$comportamentoDetalheCtrl.data.deleteFunction($comportamentoDetalheCtrl.data.item)\" item=\"$comportamentoDetalheCtrl.data.item\" cancel-function=\"$comportamentoDetalheCtrl.data.cancelFunction()\" loading=\"$comportamentoDetalheCtrl.data.loading\" title=\"{{$comportamentoDetalheCtrl.data.item.descricao || 'Cadastro de novo Item'}}\"><comportamento-form></comportamento-form></st-detalhe>"
  );


  $templateCache.put('app/comportamento/html/comportamentoForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Descrição do comportamento\" ng-model=\"$comportamentoDetalheCtrl.data.item.descricao\"></st-input-string></div>"
  );


  $templateCache.put('app/comportamento/html/comportamentoGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $comportamentoListCtrl.data.objetos\"><st-grid-item icon=\"list\" item=\"item\" label=\"{{item.descricao}}\" delete-function=\"$comportamentoListCtrl.data.deleteFunction([item.id])\" open-detail=\"$comportamentoListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/comportamento/html/comportamentoList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$comportamentoListCtrl.data.openDetail()\"><ng-md-icon icon=\"add\"></ng-md-icon>Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$comportamentoListCtrl.data.requestListParams\" get-list=\"$comportamentoListCtrl.data.getList\" filtros=\"$comportamentoListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo comportamento\" ng-click=\"$comportamentoListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$comportamentoListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$comportamentoListCtrl.data.deleteFunction($comportamentoListCtrl.data.getSelectedItemsIds())\" selected-items=\"$comportamentoListCtrl.data.selectedItems\"></st-selected-items-actions><comportamento-grid-view ng-show=\"config.confs.viewType=='grid'\"></comportamento-grid-view><comportamento-table-view ng-show=\"config.confs.viewType=='table'\"></comportamento-table-view><div ng-if=\"$comportamentoListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$comportamentoListCtrl.data.totalItens\" itens-in-page=\"$comportamentoListCtrl.data.objetos.length\" get-list=\"$comportamentoListCtrl.data.getList\" query-options=\"$comportamentoListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/comportamento/html/comportamentoTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$comportamentoListCtrl.data.tableColumns\" open-detail=\"$comportamentoListCtrl.data.openDetail\" order-by=\"$comportamentoListCtrl.data.orderBy\" delete-function=\"$comportamentoListCtrl.data.deleteFunction\" selected-items=\"$comportamentoListCtrl.data.selectedItems\" items=\"$comportamentoListCtrl.data.objetos\" edit-column=\"$comportamentoListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/diarioemocional/html/diarioemocionalDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$diarioemocionalDetalheCtrl.data.saveFunction($diarioemocionalDetalheCtrl.data.item)\" delete-function=\"$diarioemocionalDetalheCtrl.data.deleteFunction($diarioemocionalDetalheCtrl.data.item)\" item=\"$diarioemocionalDetalheCtrl.data.item\" cancel-function=\"$diarioemocionalDetalheCtrl.data.cancelFunction()\" loading=\"$diarioemocionalDetalheCtrl.data.loading\" title=\"{{$diarioemocionalDetalheCtrl.data.item._string.nome || 'Cadastro de novo Item'}}\"><diarioemocional-form></diarioemocional-form></st-detalhe>"
  );


  $templateCache.put('app/diarioemocional/html/diarioemocionalForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Nome do diarioemocional\" ng-model=\"$diarioemocionalDetalheCtrl.data.item._string.nome\"></st-input-string><md-divider></md-divider><st-input-string flex=\"30\" flex-xs=\"100\" label=\"Atributo 2\" ng-model=\"$diarioemocionalDetalheCtrl.data.item._string.atributo2\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 3\" ng-model=\"$diarioemocionalDetalheCtrl.data.item._string.atributo3\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 4\" ng-model=\"$diarioemocionalDetalheCtrl.data.item._string.atributo4\"></st-input-string><md-divider></md-divider><st-input-double flex=\"20\" flex-xs=\"100\" label=\"Preço da hora\" ng-model=\"$diarioemocionalDetalheCtrl.data.item._double.precoHora\"></st-input-double></div>"
  );


  $templateCache.put('app/diarioemocional/html/diarioemocionalGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $diarioemocionalListCtrl.data.objetos\"><st-grid-item icon=\"person\" item=\"item\" label=\"{{item._string.nome}}\" delete-function=\"$diarioemocionalListCtrl.data.deleteFunction([item.id])\" open-detail=\"$diarioemocionalListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/diarioemocional/html/diarioemocionalList.html',
    "<meta charset=\"UTF-8\"><md-content layout=\"row\" layout-wrap><md-card flex><md-card-content><div layout=\"row\" layout-align=\"center center\"><h2><ng-md-icon md-colors=\"{color: 'green'}\" icon=\"event_available\"></ng-md-icon>Como você está se sentindo?</h2></div><div layout=\"row\" layout-align=\"center center\"><md-button md-colors=\"{color: emo.color}\" ng-repeat=\"emo in $diarioemocionalListCtrl.emotions\" ng-click=\"$diarioemocionalListCtrl.submitEmotion(emo)\" class=\"md-icon-button\"><ng-md-icon icon=\"{{emo.icon}}\"></ng-md-icon></md-button></div></md-card-content></md-card></md-content>"
  );


  $templateCache.put('app/diarioemocional/html/diarioemocionalTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$diarioemocionalListCtrl.data.tableColumns\" open-detail=\"$diarioemocionalListCtrl.data.openDetail\" order-by=\"$diarioemocionalListCtrl.data.orderBy\" delete-function=\"$diarioemocionalListCtrl.data.deleteFunction\" selected-items=\"$diarioemocionalListCtrl.data.selectedItems\" items=\"$diarioemocionalListCtrl.data.objetos\" edit-column=\"$diarioemocionalListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/diariosonho/html/diariosonhoDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$diariosonhoDetalheCtrl.data.saveFunction($diariosonhoDetalheCtrl.data.item)\" delete-function=\"$diariosonhoDetalheCtrl.data.deleteFunction($diariosonhoDetalheCtrl.data.item)\" item=\"$diariosonhoDetalheCtrl.data.item\" cancel-function=\"$diariosonhoDetalheCtrl.data.cancelFunction()\" loading=\"$diariosonhoDetalheCtrl.data.loading\" title=\"{{$diariosonhoDetalheCtrl.data.item.titulo || 'Cadastro de novo Item'}}\"><diariosonho-form></diariosonho-form></st-detalhe>"
  );


  $templateCache.put('app/diariosonho/html/diariosonhoForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Título do sonho\" ng-model=\"$diariosonhoDetalheCtrl.data.item.titulo\"></st-input-string><md-input-container flex=\"100\" class=\"md-block\"><label>Descreva o sonho</label><textarea ng-model=\"$diariosonhoDetalheCtrl.data.item.descricao\" rows=\"30\" md-select-on-focus></textarea></md-input-container></div>"
  );


  $templateCache.put('app/diariosonho/html/diariosonhoGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $diariosonhoListCtrl.data.objetos\"><st-grid-item icon=\"local_hotel\" item=\"item\" label=\"{{item.titulo}}\" delete-function=\"$diariosonhoListCtrl.data.deleteFunction([item.id])\" open-detail=\"$diariosonhoListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/diariosonho/html/diariosonhoList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$diariosonhoListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$diariosonhoListCtrl.data.requestListParams\" get-list=\"$diariosonhoListCtrl.data.getList\" filtros=\"$diariosonhoListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo diariosonho\" ng-click=\"$diariosonhoListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$diariosonhoListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$diariosonhoListCtrl.data.deleteFunction($diariosonhoListCtrl.data.getSelectedItemsIds())\" selected-items=\"$diariosonhoListCtrl.data.selectedItems\"></st-selected-items-actions><diariosonho-grid-view ng-show=\"config.confs.viewType=='grid'\"></diariosonho-grid-view><diariosonho-table-view ng-show=\"config.confs.viewType=='table'\"></diariosonho-table-view><div ng-if=\"$diariosonhoListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$diariosonhoListCtrl.data.totalItens\" itens-in-page=\"$diariosonhoListCtrl.data.objetos.length\" get-list=\"$diariosonhoListCtrl.data.getList\" query-options=\"$diariosonhoListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/diariosonho/html/diariosonhoTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$diariosonhoListCtrl.data.tableColumns\" open-detail=\"$diariosonhoListCtrl.data.openDetail\" order-by=\"$diariosonhoListCtrl.data.orderBy\" delete-function=\"$diariosonhoListCtrl.data.deleteFunction\" selected-items=\"$diariosonhoListCtrl.data.selectedItems\" items=\"$diariosonhoListCtrl.data.objetos\" edit-column=\"$diariosonhoListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/entidadeteste/html/entidadetesteDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$entidadetesteDetalheCtrl.data.saveFunction($entidadetesteDetalheCtrl.data.item)\" delete-function=\"$entidadetesteDetalheCtrl.data.deleteFunction($entidadetesteDetalheCtrl.data.item)\" item=\"$entidadetesteDetalheCtrl.data.item\" cancel-function=\"$entidadetesteDetalheCtrl.data.cancelFunction()\" loading=\"$entidadetesteDetalheCtrl.data.loading\" title=\"{{$entidadetesteDetalheCtrl.data.item._string.nome || 'Cadastro de novo Item'}}\"><entidadeteste-form></entidadeteste-form></st-detalhe>"
  );


  $templateCache.put('app/entidadeteste/html/entidadetesteForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Nome do entidadeteste\" ng-model=\"$entidadetesteDetalheCtrl.data.item._string.nome\"></st-input-string><md-divider></md-divider><st-input-string flex=\"30\" flex-xs=\"100\" label=\"Atributo 2\" ng-model=\"$entidadetesteDetalheCtrl.data.item._string.atributo2\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 3\" ng-model=\"$entidadetesteDetalheCtrl.data.item._string.atributo3\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 4\" ng-model=\"$entidadetesteDetalheCtrl.data.item._string.atributo4\"></st-input-string><md-divider></md-divider><st-input-double flex=\"20\" flex-xs=\"100\" label=\"Preço da hora\" ng-model=\"$entidadetesteDetalheCtrl.data.item._double.precoHora\"></st-input-double></div>"
  );


  $templateCache.put('app/entidadeteste/html/entidadetesteGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $entidadetesteListCtrl.data.objetos\"><st-grid-item icon=\"person\" item=\"item\" label=\"{{item._string.nome}}\" delete-function=\"$entidadetesteListCtrl.data.deleteFunction([item.id])\" open-detail=\"$entidadetesteListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/entidadeteste/html/entidadetesteList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$entidadetesteListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$entidadetesteListCtrl.data.requestListParams\" get-list=\"$entidadetesteListCtrl.data.getList\" filtros=\"$entidadetesteListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo entidadeteste\" ng-click=\"$entidadetesteListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$entidadetesteListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$entidadetesteListCtrl.data.deleteFunction($entidadetesteListCtrl.data.getSelectedItemsIds())\" selected-items=\"$entidadetesteListCtrl.data.selectedItems\"></st-selected-items-actions><entidadeteste-grid-view ng-show=\"config.confs.viewType=='grid'\"></entidadeteste-grid-view><entidadeteste-table-view ng-show=\"config.confs.viewType=='table'\"></entidadeteste-table-view><div ng-if=\"$entidadetesteListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$entidadetesteListCtrl.data.totalItens\" itens-in-page=\"$entidadetesteListCtrl.data.objetos.length\" get-list=\"$entidadetesteListCtrl.data.getList\" query-options=\"$entidadetesteListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/entidadeteste/html/entidadetesteTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$entidadetesteListCtrl.data.tableColumns\" open-detail=\"$entidadetesteListCtrl.data.openDetail\" order-by=\"$entidadetesteListCtrl.data.orderBy\" delete-function=\"$entidadetesteListCtrl.data.deleteFunction\" selected-items=\"$entidadetesteListCtrl.data.selectedItems\" items=\"$entidadetesteListCtrl.data.objetos\" edit-column=\"$entidadetesteListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/evidencia/html/evidenciaDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$evidenciaDetalheCtrl.data.saveFunction($evidenciaDetalheCtrl.data.item)\" delete-function=\"$evidenciaDetalheCtrl.data.deleteFunction($evidenciaDetalheCtrl.data.item)\" item=\"$evidenciaDetalheCtrl.data.item\" cancel-function=\"$evidenciaDetalheCtrl.data.cancelFunction()\" loading=\"$evidenciaDetalheCtrl.data.loading\" title=\"{{$evidenciaDetalheCtrl.data.item._string.nome || 'Cadastro de novo Item'}}\"><evidencia-form></evidencia-form></st-detalhe>"
  );


  $templateCache.put('app/evidencia/html/evidenciaForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Nome do evidencia\" ng-model=\"$evidenciaDetalheCtrl.data.item._string.nome\"></st-input-string><md-divider></md-divider><st-input-string flex=\"30\" flex-xs=\"100\" label=\"Atributo 2\" ng-model=\"$evidenciaDetalheCtrl.data.item._string.atributo2\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 3\" ng-model=\"$evidenciaDetalheCtrl.data.item._string.atributo3\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 4\" ng-model=\"$evidenciaDetalheCtrl.data.item._string.atributo4\"></st-input-string><md-divider></md-divider><st-input-double flex=\"20\" flex-xs=\"100\" label=\"Preço da hora\" ng-model=\"$evidenciaDetalheCtrl.data.item._double.precoHora\"></st-input-double></div>"
  );


  $templateCache.put('app/evidencia/html/evidenciaGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $evidenciaListCtrl.data.objetos\"><st-grid-item icon=\"person\" item=\"item\" label=\"{{item._string.nome}}\" delete-function=\"$evidenciaListCtrl.data.deleteFunction([item.id])\" open-detail=\"$evidenciaListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/evidencia/html/evidenciaList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$evidenciaListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$evidenciaListCtrl.data.requestListParams\" get-list=\"$evidenciaListCtrl.data.getList\" filtros=\"$evidenciaListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo evidencia\" ng-click=\"$evidenciaListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$evidenciaListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$evidenciaListCtrl.data.deleteFunction($evidenciaListCtrl.data.getSelectedItemsIds())\" selected-items=\"$evidenciaListCtrl.data.selectedItems\"></st-selected-items-actions><evidencia-grid-view ng-show=\"config.confs.viewType=='grid'\"></evidencia-grid-view><evidencia-table-view ng-show=\"config.confs.viewType=='table'\"></evidencia-table-view><div ng-if=\"$evidenciaListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$evidenciaListCtrl.data.totalItens\" itens-in-page=\"$evidenciaListCtrl.data.objetos.length\" get-list=\"$evidenciaListCtrl.data.getList\" query-options=\"$evidenciaListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/evidencia/html/evidenciaTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$evidenciaListCtrl.data.tableColumns\" label=\"$evidenciaListCtrl.data.changeAttr\" open-detail=\"$evidenciaListCtrl.data.openDetail\" order-by=\"$evidenciaListCtrl.data.orderBy\" delete-function=\"$evidenciaListCtrl.data.deleteFunction\" selected-items=\"$evidenciaListCtrl.data.selectedItems\" items=\"$evidenciaListCtrl.data.objetos\" edit-column=\"$evidenciaListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/exercicio/html/exercicioDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$exercicioDetalheCtrl.data.saveFunction($exercicioDetalheCtrl.data.item)\" delete-function=\"$exercicioDetalheCtrl.data.deleteFunction($exercicioDetalheCtrl.data.item)\" item=\"$exercicioDetalheCtrl.data.item\" cancel-function=\"$exercicioDetalheCtrl.data.cancelFunction()\" loading=\"$exercicioDetalheCtrl.data.loading\" title=\"{{$exercicioDetalheCtrl.data.item.titulo || 'Cadastro de novo Item'}}\"><exercicio-form></exercicio-form></st-detalhe>"
  );


  $templateCache.put('app/exercicio/html/exercicioForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Título do exercício\" ng-model=\"$exercicioDetalheCtrl.data.item.titulo\"></st-input-string></div>"
  );


  $templateCache.put('app/exercicio/html/exercicioGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $exercicioListCtrl.data.objetos\"><st-grid-item icon=\"directions_walk\" item=\"item\" label=\"{{item.titulo}}\" delete-function=\"$exercicioListCtrl.data.deleteFunction([item.id])\" open-detail=\"$exercicioListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/exercicio/html/exercicioList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$exercicioListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$exercicioListCtrl.data.requestListParams\" get-list=\"$exercicioListCtrl.data.getList\" filtros=\"$exercicioListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo exercicio\" ng-click=\"$exercicioListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$exercicioListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$exercicioListCtrl.data.deleteFunction($exercicioListCtrl.data.getSelectedItemsIds())\" selected-items=\"$exercicioListCtrl.data.selectedItems\"></st-selected-items-actions><exercicio-grid-view ng-show=\"config.confs.viewType=='grid'\"></exercicio-grid-view><exercicio-table-view ng-show=\"config.confs.viewType=='table'\"></exercicio-table-view><div ng-if=\"$exercicioListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$exercicioListCtrl.data.totalItens\" itens-in-page=\"$exercicioListCtrl.data.objetos.length\" get-list=\"$exercicioListCtrl.data.getList\" query-options=\"$exercicioListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/exercicio/html/exercicioTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$exercicioListCtrl.data.tableColumns\" open-detail=\"$exercicioListCtrl.data.openDetail\" order-by=\"$exercicioListCtrl.data.orderBy\" delete-function=\"$exercicioListCtrl.data.deleteFunction\" selected-items=\"$exercicioListCtrl.data.selectedItems\" items=\"$exercicioListCtrl.data.objetos\" edit-column=\"$exercicioListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/fobia/html/fobiaDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$fobiaDetalheCtrl.data.saveFunction($fobiaDetalheCtrl.data.item)\" delete-function=\"$fobiaDetalheCtrl.data.deleteFunction($fobiaDetalheCtrl.data.item)\" item=\"$fobiaDetalheCtrl.data.item\" cancel-function=\"$fobiaDetalheCtrl.data.cancelFunction()\" loading=\"$fobiaDetalheCtrl.data.loading\" title=\"{{$fobiaDetalheCtrl.data.item._string.nome || 'Cadastro de novo Item'}}\"><fobia-form></fobia-form></st-detalhe>"
  );


  $templateCache.put('app/fobia/html/fobiaForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Descrição\" ng-model=\"$fobiaDetalheCtrl.data.item.descricao\"></st-input-string></div>"
  );


  $templateCache.put('app/fobia/html/fobiaGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $fobiaListCtrl.data.objetos\"><st-grid-item icon=\"person\" item=\"item\" label=\"{{item.descricao}}\" delete-function=\"$fobiaListCtrl.data.deleteFunction([item.id])\" open-detail=\"$fobiaListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/fobia/html/fobiaList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$fobiaListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$fobiaListCtrl.data.requestListParams\" get-list=\"$fobiaListCtrl.data.getList\" filtros=\"$fobiaListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo fobia\" ng-click=\"$fobiaListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$fobiaListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$fobiaListCtrl.data.deleteFunction($fobiaListCtrl.data.getSelectedItemsIds())\" selected-items=\"$fobiaListCtrl.data.selectedItems\"></st-selected-items-actions><fobia-grid-view ng-show=\"config.confs.viewType=='grid'\"></fobia-grid-view><fobia-table-view ng-show=\"config.confs.viewType=='table'\"></fobia-table-view><div ng-if=\"$fobiaListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$fobiaListCtrl.data.totalItens\" itens-in-page=\"$fobiaListCtrl.data.objetos.length\" get-list=\"$fobiaListCtrl.data.getList\" query-options=\"$fobiaListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/fobia/html/fobiaTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$fobiaListCtrl.data.tableColumns\" open-detail=\"$fobiaListCtrl.data.openDetail\" order-by=\"$fobiaListCtrl.data.orderBy\" delete-function=\"$fobiaListCtrl.data.deleteFunction\" selected-items=\"$fobiaListCtrl.data.selectedItems\" items=\"$fobiaListCtrl.data.objetos\" edit-column=\"$fobiaListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/frequenciasonora/html/frequenciasonoraDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$frequenciasonoraDetalheCtrl.data.saveFunction($frequenciasonoraDetalheCtrl.data.item)\" delete-function=\"$frequenciasonoraDetalheCtrl.data.deleteFunction($frequenciasonoraDetalheCtrl.data.item)\" item=\"$frequenciasonoraDetalheCtrl.data.item\" cancel-function=\"$frequenciasonoraDetalheCtrl.data.cancelFunction()\" loading=\"$frequenciasonoraDetalheCtrl.data.loading\" title=\"{{$frequenciasonoraDetalheCtrl.data.item._string.nome || 'Cadastro de novo Item'}}\"><frequenciasonora-form></frequenciasonora-form><youtube-video video-url=\"$frequenciasonoraDetalheCtrl.data.item.url\"></youtube-video></st-detalhe>"
  );


  $templateCache.put('app/frequenciasonora/html/frequenciasonoraForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Título\" ng-model=\"$frequenciasonoraDetalheCtrl.data.item.titulo\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"URL do vídeo no outube\" ng-model=\"$frequenciasonoraDetalheCtrl.data.item.url\"></st-input-string><md-input-container flex=\"50\"><label>Tipo de frequência</label><md-select ng-model=\"$frequenciasonoraDetalheCtrl.data.item.tipo\"><md-option ng-value=\"'amor'\">Amor</md-option><md-option ng-value=\"'prosperidade'\">Prosperidade</md-option></md-select></md-input-container><md-input-container flex=\"100\"><label>Efeitos</label><st-string-chip ng-model=\"$frequenciasonoraDetalheCtrl.data.item.efeitos\" placeholder=\"Inserir efeito\"></st-string-chip></md-input-container></div>"
  );


  $templateCache.put('app/frequenciasonora/html/frequenciasonoraGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $frequenciasonoraListCtrl.data.objetos\"><st-grid-item icon=\"list\" item=\"item\" label=\"{{item.tipo}}\" delete-function=\"$frequenciasonoraListCtrl.data.deleteFunction([item.id])\" open-detail=\"$frequenciasonoraListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/frequenciasonora/html/frequenciasonoraList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$frequenciasonoraListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$frequenciasonoraListCtrl.data.requestListParams\" get-list=\"$frequenciasonoraListCtrl.data.getList\" filtros=\"$frequenciasonoraListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo frequenciasonora\" ng-click=\"$frequenciasonoraListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$frequenciasonoraListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$frequenciasonoraListCtrl.data.deleteFunction($frequenciasonoraListCtrl.data.getSelectedItemsIds())\" selected-items=\"$frequenciasonoraListCtrl.data.selectedItems\"></st-selected-items-actions><frequenciasonora-grid-view ng-show=\"config.confs.viewType=='grid'\"></frequenciasonora-grid-view><frequenciasonora-table-view ng-show=\"config.confs.viewType=='table'\"></frequenciasonora-table-view><div ng-if=\"$frequenciasonoraListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$frequenciasonoraListCtrl.data.totalItens\" itens-in-page=\"$frequenciasonoraListCtrl.data.objetos.length\" get-list=\"$frequenciasonoraListCtrl.data.getList\" query-options=\"$frequenciasonoraListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/frequenciasonora/html/frequenciasonoraTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$frequenciasonoraListCtrl.data.tableColumns\" open-detail=\"$frequenciasonoraListCtrl.data.openDetail\" order-by=\"$frequenciasonoraListCtrl.data.orderBy\" delete-function=\"$frequenciasonoraListCtrl.data.deleteFunction\" selected-items=\"$frequenciasonoraListCtrl.data.selectedItems\" items=\"$frequenciasonoraListCtrl.data.objetos\" edit-column=\"$frequenciasonoraListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/habito/html/habitoDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$habitoDetalheCtrl.data.saveFunction($habitoDetalheCtrl.data.item)\" delete-function=\"$habitoDetalheCtrl.data.deleteFunction($habitoDetalheCtrl.data.item)\" item=\"$habitoDetalheCtrl.data.item\" cancel-function=\"$habitoDetalheCtrl.data.cancelFunction()\" loading=\"$habitoDetalheCtrl.data.loading\" title=\"{{$habitoDetalheCtrl.data.item.titulo || 'Cadastro de novo Item'}}\"><habito-form></habito-form></st-detalhe>"
  );


  $templateCache.put('app/habito/html/habitoForm.html',
    "<meta charset=\"UTF-8\" />\r" +
    "\n" +
    "<div layout=\"row\" class=\"md-block\" layout-wrap layout-align=\"center center\">\r" +
    "\n" +
    "   <st-input-string flex=\"45\" flex-xs=\"100\"  label=\"Descrição do hábito\" ng-model=\"$habitoDetalheCtrl.data.item.titulo\" ></st-input-string>\r" +
    "\n" +
    "    <div   flex=\"45\">\r" +
    "\n" +
    "	    <st-auto-complete    \r" +
    "\n" +
    "	       \r" +
    "\n" +
    "		     label-cad=\"Cadastrar categoria\" \r" +
    "\n" +
    "		     placeholder=\"Digite um termo para buscar\"  \r" +
    "\n" +
    "		     object-name=\"Opcao\"  \r" +
    "\n" +
    "		     attr=\"valor\"\r" +
    "\n" +
    "		     label=\"Categoria do hábito\"\r" +
    "\n" +
    "		     initial-busca=\"\"                 \r" +
    "\n" +
    "		     value-only=\"true\"\r" +
    "\n" +
    "		     fix-properties=\"{descricao:'categoria_habito'}\" \r" +
    "\n" +
    "		     ng-model=\"$habitoDetalheCtrl.data.item.categoria\" \r" +
    "\n" +
    "	     </st-auto-complete>\r" +
    "\n" +
    "     </div>\r" +
    "\n" +
    "   <st-string-check flex=\"100\"\r" +
    "\n" +
    "       titulo = \"Dias da semana\"\r" +
    "\n" +
    "       items = \"[\r" +
    "\n" +
    "          {label:'Domingo', attr: 1},\r" +
    "\n" +
    "          {label:'Segunda', attr: 2},\r" +
    "\n" +
    "          {label:'Terça', attr: 3},  \r" +
    "\n" +
    "          {label:'Quarta', attr: 4},\r" +
    "\n" +
    "          {label:'Quinta', attr: 5},\r" +
    "\n" +
    "          {label:'Sexta', attr: 6},\r" +
    "\n" +
    "          {label:'Sábado', attr: 7}\r" +
    "\n" +
    "           ]\"\r" +
    "\n" +
    "        ng-model=\"$habitoDetalheCtrl.data.item.diasSemana\"         \r" +
    "\n" +
    "     ></st-string-check>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    " <md-divider></md-divider>\r" +
    "\n" +
    "<div layout=\"row\">\r" +
    "\n" +
    "    <div flex-gt-md=\"50\">\r" +
    "\n" +
    "         <p>Consequências ao cumprir a meta</p>\r" +
    "\n" +
    "	      <st-string-chip placeholder=\"Inserir item...\" ng-model=\"$habitoDetalheCtrl.data.item.consequenciasCumprir\"></st-string-chip>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "     <md-divider></md-divider>\r" +
    "\n" +
    "     <div flex-gt-md=\"50\">\r" +
    "\n" +
    "         <p>Consequências ao não cumprir a meta</p>\r" +
    "\n" +
    "	      <st-string-chip placeholder=\"Inserir item...\" ng-model=\"$habitoDetalheCtrl.data.item.consequenciasNaoCumprir\"></st-string-chip>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/habito/html/habitoGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $habitoListCtrl.data.objetos\"><st-grid-item icon=\"person\" item=\"item\" label=\"{{item.titulo}}\" delete-function=\"$habitoListCtrl.data.deleteFunction([item.id])\" open-detail=\"$habitoListCtrl.data.openDetail(item)\"><div layout=\"row\"><md-button class=\"md-primary\"><ng-md-icon icon=\"playlist_add_check\"></ng-md-icon>{{item.meta.titulo}}</md-button></div></st-grid-item></div></div>"
  );


  $templateCache.put('app/habito/html/habitoList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$habitoListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$habitoListCtrl.data.requestListParams\" get-list=\"$habitoListCtrl.data.getList\" filtros=\"$habitoListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo habito\" ng-click=\"$habitoListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$habitoListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$habitoListCtrl.data.deleteFunction($habitoListCtrl.data.getSelectedItemsIds())\" selected-items=\"$habitoListCtrl.data.selectedItems\"></st-selected-items-actions><habito-grid-view ng-show=\"config.confs.viewType=='grid'\"></habito-grid-view><habito-table-view ng-show=\"config.confs.viewType=='table'\"></habito-table-view><div ng-if=\"$habitoListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$habitoListCtrl.data.totalItens\" itens-in-page=\"$habitoListCtrl.data.objetos.length\" get-list=\"$habitoListCtrl.data.getList\" query-options=\"$habitoListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/habito/html/habitoTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$habitoListCtrl.data.tableColumns\" label=\"$habitoListCtrl.data.changeAttr\" open-detail=\"$habitoListCtrl.data.openDetail\" order-by=\"$habitoListCtrl.data.orderBy\" delete-function=\"$habitoListCtrl.data.deleteFunction\" selected-items=\"$habitoListCtrl.data.selectedItems\" items=\"$habitoListCtrl.data.objetos\" edit-column=\"$habitoListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/habitosubmit/html/habitosubmitDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$habitosubmitDetalheCtrl.data.saveFunction($habitosubmitDetalheCtrl.data.item)\" delete-function=\"$habitosubmitDetalheCtrl.data.deleteFunction($habitosubmitDetalheCtrl.data.item)\" item=\"$habitosubmitDetalheCtrl.data.item\" cancel-function=\"$habitosubmitDetalheCtrl.data.cancelFunction()\" loading=\"$habitosubmitDetalheCtrl.data.loading\" title=\"{{$habitosubmitDetalheCtrl.data.item._string.nome || 'Cadastro de novo Item'}}\"><habitosubmit-form></habitosubmit-form></st-detalhe>"
  );


  $templateCache.put('app/habitosubmit/html/habitosubmitForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Nome do habitosubmit\" ng-model=\"$habitosubmitDetalheCtrl.data.item._string.nome\"></st-input-string><md-divider></md-divider><st-input-string flex=\"30\" flex-xs=\"100\" label=\"Atributo 2\" ng-model=\"$habitosubmitDetalheCtrl.data.item._string.atributo2\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 3\" ng-model=\"$habitosubmitDetalheCtrl.data.item._string.atributo3\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 4\" ng-model=\"$habitosubmitDetalheCtrl.data.item._string.atributo4\"></st-input-string><md-divider></md-divider><st-input-double flex=\"20\" flex-xs=\"100\" label=\"Preço da hora\" ng-model=\"$habitosubmitDetalheCtrl.data.item._double.precoHora\"></st-input-double></div>"
  );


  $templateCache.put('app/habitosubmit/html/habitosubmitGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\"><span flex></span><md-card flex=\"70\"><md-card-content><div layout=\"row\" layout-align=\"center center\"><h2><ng-md-icon md-colors=\"{color: 'green'}\" icon=\"check\"></ng-md-icon>Verificador de hábitos</h2></div><div flex=\"100\" flex-xs=\"100\"><md-checkbox ng-true-value=\"1\" ng-false-value=\"0\" ng-model=\"$habitosubmitListCtrl.verSomenteNaoCumpridos\">Visualizar somente hábitos não cumpridos</md-checkbox></div><md-list flex><md-subheader class=\"md-no-sticky\">Hábitos em {{$habitosubmitListCtrl.today|date:'dd/MM/yyyy'}} [{{$habitosubmitListCtrl.mergedHabits.length}}]</md-subheader><div ng-show=\"!$habitosubmitListCtrl.verSomenteNaoCumpridos==1 || (item.submitedInToday==false || !item.submitedInToday)\" id=\"merged-habits-index-{{$index}}\" ng-repeat=\"item in $habitosubmitListCtrl.mergedHabits | orderBy :'categoria'  | habitoGroupBy:'categoria' \"><md-subheader ng-show=\"item.categoria_CHANGED\" class=\"md-no-sticky\"><ng-md-icon icon=\"stars\" md-colors=\"{color: 'green'}\"></ng-md-icon>{{item.categoria|| 'Outros'}}</md-subheader><md-list-item><md-checkbox ng-change=\"$habitosubmitListCtrl.changeSubmit(item)\" ng-model=\"item.submitedInToday\" ng-true-value=\"true\" ng-false-value=\"false\" class=\"submitedInToday\"></md-checkbox><md-tooltip>{{item.meta.titulo}}</md-tooltip><p ng-class=\"{'riscado':  item.submitedInToday==true}\">{{item.titulo}}</p><md-divider></md-divider><md-button class=\"md-primary md-hue-2\" aria-label=\"Profile\">{{item.submitedDays}} dias</md-button><md-divider></md-divider></md-list-item></div></md-list></md-card-content></md-card><span flex></span></div>"
  );


  $templateCache.put('app/habitosubmit/html/habitosubmitList.html',
    "<meta charset=\"UTF-8\"><habitosubmit-grid-view></habitosubmit-grid-view>"
  );


  $templateCache.put('app/inicio/html/inicio.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap><div flex-gt-md=\"50\" hide show-gt-md><div layout=\"column\"><diarioemocional-list flex></diarioemocional-list><metascumpridas-list flex></metascumpridas-list></div></div><div flex flex-gt-md=\"50\"><div layout=\"column\"><md-card><md-card-content><div layout=\"row\" layout-align=\"center center\"><h2><ng-md-icon md-colors=\"{color: 'green'}\" icon=\"playlist_add_check\"></ng-md-icon>Metas fixadas</h2></div><meta-list hide-button-add=\"true\" hide-filter=\"true\" hide-pagination=\"true\" fix-properties=\"{exibirNaPaginaInicial: 1}\"></meta-list></md-card-content></md-card><rodadavida-list></rodadavida-list></div></div></div>"
  );


  $templateCache.put('app/lembrancamarcante/html/lembrancamarcanteDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$lembrancamarcanteDetalheCtrl.data.saveFunction($lembrancamarcanteDetalheCtrl.data.item)\" delete-function=\"$lembrancamarcanteDetalheCtrl.data.deleteFunction($lembrancamarcanteDetalheCtrl.data.item)\" item=\"$lembrancamarcanteDetalheCtrl.data.item\" cancel-function=\"$lembrancamarcanteDetalheCtrl.data.cancelFunction()\" loading=\"$lembrancamarcanteDetalheCtrl.data.loading\" title=\"{{$lembrancamarcanteDetalheCtrl.data.item.titulo || 'Cadastro de novo Item'}}\"><lembrancamarcante-form></lembrancamarcante-form></st-detalhe>"
  );


  $templateCache.put('app/lembrancamarcante/html/lembrancamarcanteForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"100\" label=\"Título\" ng-model=\"$lembrancamarcanteDetalheCtrl.data.item.titulo\"></st-input-string><md-input-container flex=\"50\"><label>Categoria</label><md-select ng-model=\"$lembrancamarcanteDetalheCtrl.data.item.categoria\"><md-option ng-value=\"'positiva'\">Positiva</md-option><md-option ng-value=\"'negativa'\">Negativa</md-option></md-select></md-input-container><md-input-container flex=\"100\" class=\"md-block\"><label>Descrição</label><textarea ng-model=\"$lembrancamarcanteDetalheCtrl.data.item.descricao\" rows=\"30\" md-select-on-focus></textarea></md-input-container></div>"
  );


  $templateCache.put('app/lembrancamarcante/html/lembrancamarcanteGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $lembrancamarcanteListCtrl.data.objetos\"><st-grid-item icon=\"person\" item=\"item\" label=\"{{item._string.nome}}\" delete-function=\"$lembrancamarcanteListCtrl.data.deleteFunction([item.id])\" open-detail=\"$lembrancamarcanteListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/lembrancamarcante/html/lembrancamarcanteList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$lembrancamarcanteListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$lembrancamarcanteListCtrl.data.requestListParams\" get-list=\"$lembrancamarcanteListCtrl.data.getList\" filtros=\"$lembrancamarcanteListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo lembrancamarcante\" ng-click=\"$lembrancamarcanteListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$lembrancamarcanteListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$lembrancamarcanteListCtrl.data.deleteFunction($lembrancamarcanteListCtrl.data.getSelectedItemsIds())\" selected-items=\"$lembrancamarcanteListCtrl.data.selectedItems\"></st-selected-items-actions><lembrancamarcante-grid-view ng-show=\"config.confs.viewType=='grid'\"></lembrancamarcante-grid-view><lembrancamarcante-table-view ng-show=\"config.confs.viewType=='table'\"></lembrancamarcante-table-view><div ng-if=\"$lembrancamarcanteListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$lembrancamarcanteListCtrl.data.totalItens\" itens-in-page=\"$lembrancamarcanteListCtrl.data.objetos.length\" get-list=\"$lembrancamarcanteListCtrl.data.getList\" query-options=\"$lembrancamarcanteListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/lembrancamarcante/html/lembrancamarcanteTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$lembrancamarcanteListCtrl.data.tableColumns\" open-detail=\"$lembrancamarcanteListCtrl.data.openDetail\" order-by=\"$lembrancamarcanteListCtrl.data.orderBy\" delete-function=\"$lembrancamarcanteListCtrl.data.deleteFunction\" selected-items=\"$lembrancamarcanteListCtrl.data.selectedItems\" items=\"$lembrancamarcanteListCtrl.data.objetos\" edit-column=\"$lembrancamarcanteListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/list/html/listDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$listDetalheCtrl.data.saveFunction($listDetalheCtrl.data.item)\" delete-function=\"$listDetalheCtrl.data.deleteFunction($listDetalheCtrl.data.item)\" item=\"$listDetalheCtrl.data.item\" cancel-function=\"$listDetalheCtrl.data.cancelFunction()\" loading=\"$listDetalheCtrl.data.loading\" title=\"{{$listDetalheCtrl.data.item.titulo || 'Cadastro de novo Item'}}\"><list-form></list-form></st-detalhe>"
  );


  $templateCache.put('app/list/html/listForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Título da lista\" ng-model=\"$listDetalheCtrl.data.item.titulo\"></st-input-string><st-check-list ng-if=\"$listDetalheCtrl.data.item.id\" label=\"Teste\" attr-label=\"titulo\" attr=\"ok\" crud-options=\"{objectName: 'ListItem', fixProperties: {'lista.id':$listDetalheCtrl.data.item.id}}\"></st-check-list></div>"
  );


  $templateCache.put('app/list/html/listGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $listListCtrl.data.objetos\"><st-grid-item icon=\"playlist_add_check\" item=\"item\" label=\"{{item.titulo}}\" delete-function=\"$listListCtrl.data.deleteFunction([item.id])\" open-detail=\"$listListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/list/html/listList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$listListCtrl.data.openDetail()\"><ng-md-icon icon=\"add\"></ng-md-icon>Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$listListCtrl.data.requestListParams\" get-list=\"$listListCtrl.data.getList\" filtros=\"$listListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo list\" ng-click=\"$listListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$listListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$listListCtrl.data.deleteFunction($listListCtrl.data.getSelectedItemsIds())\" selected-items=\"$listListCtrl.data.selectedItems\"></st-selected-items-actions><list-grid-view ng-show=\"config.confs.viewType=='grid'\"></list-grid-view><list-table-view ng-show=\"config.confs.viewType=='table'\"></list-table-view><div ng-if=\"$listListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$listListCtrl.data.totalItens\" itens-in-page=\"$listListCtrl.data.objetos.length\" get-list=\"$listListCtrl.data.getList\" query-options=\"$listListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/list/html/listTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$listListCtrl.data.tableColumns\" open-detail=\"$listListCtrl.data.openDetail\" order-by=\"$listListCtrl.data.orderBy\" delete-function=\"$listListCtrl.data.deleteFunction\" selected-items=\"$listListCtrl.data.selectedItems\" items=\"$listListCtrl.data.objetos\" edit-column=\"$listListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/listitem/html/listitemDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$listitemDetalheCtrl.data.saveFunction($listitemDetalheCtrl.data.item)\" delete-function=\"$listitemDetalheCtrl.data.deleteFunction($listitemDetalheCtrl.data.item)\" item=\"$listitemDetalheCtrl.data.item\" cancel-function=\"$listitemDetalheCtrl.data.cancelFunction()\" loading=\"$listitemDetalheCtrl.data.loading\" title=\"{{$listitemDetalheCtrl.data.item.titulo || 'Cadastro de novo Item'}}\"><listitem-form></listitem-form></st-detalhe>"
  );


  $templateCache.put('app/listitem/html/listitemForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Título do item\" ng-model=\"$listitemDetalheCtrl.data.item.titulo\"></st-input-string></div>"
  );


  $templateCache.put('app/listitem/html/listitemGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $listitemListCtrl.data.objetos\"><st-grid-item icon=\"list\" item=\"item\" label=\"{{item.titulo}}\" delete-function=\"$listitemListCtrl.data.deleteFunction([item.id])\" open-detail=\"$listitemListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/listitem/html/listitemList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$listitemListCtrl.data.openDetail()\"><ng-md-icon icon=\"add\"></ng-md-icon>Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$listitemListCtrl.data.requestListParams\" get-list=\"$listitemListCtrl.data.getList\" filtros=\"$listitemListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo listitem\" ng-click=\"$listitemListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$listitemListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$listitemListCtrl.data.deleteFunction($listitemListCtrl.data.getSelectedItemsIds())\" selected-items=\"$listitemListCtrl.data.selectedItems\"></st-selected-items-actions><listitem-grid-view ng-show=\"config.confs.viewType=='grid'\"></listitem-grid-view><listitem-table-view ng-show=\"config.confs.viewType=='table'\"></listitem-table-view><div ng-if=\"$listitemListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$listitemListCtrl.data.totalItens\" itens-in-page=\"$listitemListCtrl.data.objetos.length\" get-list=\"$listitemListCtrl.data.getList\" query-options=\"$listitemListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/listitem/html/listitemTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$listitemListCtrl.data.tableColumns\" open-detail=\"$listitemListCtrl.data.openDetail\" order-by=\"$listitemListCtrl.data.orderBy\" delete-function=\"$listitemListCtrl.data.deleteFunction\" selected-items=\"$listitemListCtrl.data.selectedItems\" items=\"$listitemListCtrl.data.objetos\" edit-column=\"$listitemListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/login/html/cadastroUsuario.html',
    "<meta charset=\"UTF-8\"><vertical-space></vertical-space><div><div class=\"col-lg-2 only-desktop\"></div><div class=\"panel panel-body col-lg-8\"><h2 class=\"text-center text-muted\">Parabéns <strong>{{lead.nome}}</strong> <i class=\"fa fa-smile-o\" aria-hidden=\"true\"></i></h2><p class=\"text-center\"><img ng-src=\"ceasaplus-onboard.png\"></p><h4 class=\"text-center\"><i class=\"fa fa-refresh faa-spin animated\" aria-hidden=\"true\"></i> Aguarde enquanto seu banco de dados na nuvem é configurado.</h4></div><div class=\"col-lg-2 only-desktop\"></div></div>"
  );


  $templateCache.put('app/login/html/login.html',
    "<meta charset=\"UTF-8\"><section layout=\"row\" flex layout-align-md=\"center center\"><span flex></span><md-card flex-gt-md=\"50\" flex-xs=\"100\"><md-toolbar layout=\"row\" layout-align=\"center center\"><div><div class=\"md-headline md-padding\">Entrar no sistema</div></div></md-toolbar><md-card-content><form name=\"login\"><md-input-container class=\"md-block\"><label for=\"email\">Empresa</label><input ng-model=\"login.empresa\" required></md-input-container><md-input-container class=\"md-block\"><label for=\"email\">Usuário</label><input ng-model=\"login.usuario\" required></md-input-container><md-input-container class=\"md-block\"><label for=\"password\">Senha</label><input type=\"password\" name=\"password\" ng-model=\"login.senha\" required></md-input-container><md-input-container class=\"md-block\"><div layout=\"row\" layout-align=\"center center\"><md-button ng-click=\"logar(login,lembrarSenha)\" class=\"md-raised md-accent\" flex=\"100\">Login</md-button></div></md-input-container></form></md-card-content></md-card><span flex></span></section>"
  );


  $templateCache.put('app/menu/html/menu.html',
    "<meta charset=\"UTF-8\"><div ng-show=\"$menuCtrl.data.showMenu\" ng-controller=\"menuCtrl as $menuCtrl\"><md-toolbar md-truncate layout=\"row\" class=\"md-toolbar-tools\"><div class=\"md-toolbar-tools\"><md-button ng-click=\"$menuCtrl.data.toggleSideNav()\" class=\"md-icon-button\" aria-label=\"Settings\"><ng-md-icon icon=\"menu\"></ng-md-icon></md-button><md-button href=\"#/inicio\" class=\"md-icon-button\" aria-label=\"Settings\"><ng-md-icon icon=\"home\"></ng-md-icon></md-button><md-divider></md-divider><h2 hide-xs md-truncate>Coach.me - <i>Planejamento, método e disciplina!</i></h2><span flex=\"10\"></span><st-breadcumb ng-disabled=\"true\" hide show-gt-xs></st-breadcumb><!--  \r" +
    "\n" +
    "				    <button-filial></button-filial>\r" +
    "\n" +
    "				    --><md-button ng-click=\"$menuCtrl.toPath('relatorio')\"><ng-md-icon md-colors=\"{color: 'orange'}\" icon=\"pie_chart\"></ng-md-icon>Relatórios</md-button><md-button ng-click=\"$menuCtrl.toPath('todaytask')\"><ng-md-icon md-colors=\"{color: 'green'}\" icon=\"today\"></ng-md-icon>Tarefas</md-button><span flex></span> <span>{{$menuCtrl.appVersion}}</span></div></md-toolbar><md-sidenav class=\"md-sidenav\" md-component-id=\"side-nav-principal\" md-disable-backdrop md-whiteframe=\"4\"><md-toolbar layout=\"row\"><div class=\"md-toolbar-tools\"><h2>Opções</h2><span flex></span><md-button class=\"md-icon-button\" aria-label=\"Close Side Panel\" ng-click=\"$menuCtrl.data.toggleSideNav()\"><md-tooltip>Fechar</md-tooltip><ng-md-icon icon=\"close\"></ng-md-icon></md-button></div></md-toolbar><md-list class=\"menu-items\"><md-list-item ng-repeat=\"item in $menuCtrl.data.menuItems\" ng-click=\"$menuCtrl.data.changePath(item.path)\"><div class=\"inset\"><ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon></div><div class=\"inset\">{{item.label}}</div></md-list-item><md-divider></md-divider><md-list-item ng-click=\"$menuCtrl.data.openConfig()\"><div class=\"inset\"><ng-md-icon icon=\"settings\"></ng-md-icon></div><div class=\"inset\">Configurações</div></md-list-item><md-list-item ng-click=\"$menuCtrl.data.logOut()\"><div class=\"inset\"><ng-md-icon icon=\"logout\"></ng-md-icon></div><div class=\"inset\">Sair</div></md-list-item></md-list></md-sidenav></div>"
  );


  $templateCache.put('app/meta/html/metaDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$metaDetalheCtrl.data.saveFunction($metaDetalheCtrl.data.item)\" delete-function=\"$metaDetalheCtrl.data.deleteFunction($metaDetalheCtrl.data.item)\" item=\"$metaDetalheCtrl.data.item\" cancel-function=\"$metaDetalheCtrl.data.cancelFunction()\" loading=\"$metaDetalheCtrl.data.loading\" title=\"{{$metaDetalheCtrl.data.item._string.titulo || 'Cadastro de nova meta'}}\"><md-tabs md-dynamic-height md-border-bottom><md-tab label=\"Sumário\"><md-content layout=\"column\" layout-padding><div flex><p><strong>Resta(m): </strong>{{$metaDetalheCtrl.data.item.data|metaCountDown}}</p><p><strong>Data de início: </strong>{{$metaDetalheCtrl.data.item.dataCadastro|date: 'dd/MM/yyyy'}}</p><p><strong>Data de entrega: </strong>{{$metaDetalheCtrl.data.item.data|date: 'dd/MM/yyyy'}}</p><p><strong>Dias corridos: </strong>{{$metaDetalheCtrl.data.item.diasCorridos}}</p><p><strong>Qual é o seu objetivo?</strong></p><p>{{$metaDetalheCtrl.data.item.titulo}}</p><p><strong>Descrição da meta no presente</strong></p><p>{{$metaDetalheCtrl.data.item.descricao}}</p><p><strong>Papeis assumidos para alcançar a meta</strong></p><p>{{$metaDetalheCtrl.data.item.papeis}}</p><p><strong>Onde e com quem?</strong></p><p>{{$metaDetalheCtrl.data.item.contexto}}</p><p><strong>O que eu irei ver e sentir quando alcançar o objetivo</strong></p><p>{{$metaDetalheCtrl.data.item.evidencias}}</p><p><strong>Como irei ver se estou avançando? Métricas, etc..</strong></p><p>{{$metaDetalheCtrl.data.item.comoVerAvanco}}</p><md-divider></md-divider><p><strong>O que te impede de alcançar a meta?</strong></p><p>{{$metaDetalheCtrl.data.item.impedimentos}}</p><p><strong>Você já tentou algo para alcançar essa meta no passado? O que?</strong></p><p>{{$metaDetalheCtrl.data.item.jaTentou}}</p><p><strong>Quais são suas dificuldades neurológicas para alcançar esta meta?</strong></p><p>{{$metaDetalheCtrl.data.item.dificuldadesNeurologicas}}</p><p><strong>O que você poderá ganhar quando alcançar a meta?</strong></p><p>{{$metaDetalheCtrl.data.item.podeGanhar}}</p><p><strong>O que você pode perder quando alcançar a meta?</strong></p><p>{{$metaDetalheCtrl.data.item.podePerder}}</p><p><strong>Quais recursos você já possui para realização da meta?</strong></p><p>{{$metaDetalheCtrl.data.item.recursosJaTenho}}</p><p><strong>Quais recursos eu preciso para realização da meta?</strong></p><p>{{$metaDetalheCtrl.data.item.recursosNaoTenho}}</p><p><strong>Quem são os meus mentores para alcançar esta meta?</strong></p><p>{{$metaDetalheCtrl.data.item.mentores}}</p></div></md-content></md-tab><md-tab label=\"Descrição da sua meta\"><md-content class=\"md-padding\"><div flex=\"100\" flex-xs=\"100\"><md-checkbox ng-change=\"$metaDetalheCtrl.data.changeAlcancada($metaDetalheCtrl.data.item)\" ng-true-value=\"1\" ng-false-value=\"0\" ng-model=\"$metaDetalheCtrl.data.item.alcancada\">Alcançada</md-checkbox></div><div flex=\"100\" flex-xs=\"100\"><md-checkbox ng-true-value=\"1\" ng-false-value=\"0\" ng-model=\"$metaDetalheCtrl.data.item.exibirNaPaginaInicial\">Exibir na página inicial</md-checkbox></div><st-input-string label=\"O que você quer ser, ter ou fazer? qual é o seu objetivo?\" ng-model=\"$metaDetalheCtrl.data.item.titulo\"></st-input-string><md-input-container flex=\"100\" class=\"md-block\"><label>Descreva a meta no presente</label><textarea ng-model=\"$metaDetalheCtrl.data.item.descricao\" md-select-on-focus></textarea></md-input-container><p>Dicas</p><p>Seu objetivo deve ser específico (Ex: emagrecer 5kg)</p><p>Deve estar foamulado positivamente</p><md-content class=\"md-padding\"><p>Quais são os papéis que você deve assumir para alcançar a meta?</p><st-string-chip placeholder=\"Inserir item...\" ng-model=\"$metaDetalheCtrl.data.item.papeis\"></st-string-chip></md-content></md-content></md-tab><md-tab label=\"Data\"><md-content class=\"md-padding\"><st-input-date label=\"Data para realização da meta\" ng-model=\"$metaDetalheCtrl.data.item.data\"></st-input-date></md-content></md-tab><md-tab label=\"Contexto\"><md-content class=\"md-padding\"><p>Onde e com quem?</p><st-string-chip placeholder=\"Inserir item...\" ng-model=\"$metaDetalheCtrl.data.item.contexto\"></st-string-chip></md-content></md-tab><md-tab label=\"Evidência\"><md-content class=\"md-padding\"><md-input-container layout=\"row\"><label>O que eu irei ver e sentir quando alcançar o objetivo?</label><st-string-chip placeholder=\"Inserir item...\" ng-model=\"$metaDetalheCtrl.data.item.evidencias\"></st-string-chip></md-input-container><md-input-container layout=\"row\"><label>Como verei se estou avançando? indo na direção Certa?</label><st-string-chip placeholder=\"Inserir item...\" ng-model=\"$metaDetalheCtrl.data.item.comoVerAvanco\"></st-string-chip></md-input-container><md-input-container layout=\"row\"><label>Ancoras</label><st-string-chip ng-model=\"$metaDetalheCtrl.data.item.ancoras\" placeholder=\"Inserir ancora\"></st-string-chip></md-input-container></md-content></md-tab><md-tab label=\"Impedimentos\"><md-content class=\"md-padding\"><p>O que te impede de realizar esta meta?</p><st-string-chip placeholder=\"Inserir item...\" ng-model=\"$metaDetalheCtrl.data.item.impedimentos\"></st-string-chip><p>O que você já tentou para alcançar essa meta no passado?</p><st-string-chip placeholder=\"Inserir item...\" ng-model=\"$metaDetalheCtrl.data.item.jaTentou\"></st-string-chip><p>Quais são suas dificuldades neurológicas?</p><st-string-chip placeholder=\"Inserir item...\" ng-model=\"$metaDetalheCtrl.data.item.dificuldadesNeurologicas\"></st-string-chip></md-content></md-tab><md-tab label=\"Análise sistemica\"><md-content class=\"md-padding\"><p>O que você poderá ganhar quando alcançar a meta?</p><st-string-chip placeholder=\"Inserir item...\" ng-model=\"$metaDetalheCtrl.data.item.podeGanhar\"></st-string-chip><p>O que você pode perder quando alcançar a meta?</p><st-string-chip placeholder=\"Inserir item...\" ng-model=\"$metaDetalheCtrl.data.item.podePerder\"></st-string-chip></md-content></md-tab><md-tab label=\"Recursos\"><md-content class=\"md-padding\"><p>Quais recursos você já possui para realização da meta?</p><st-string-chip placeholder=\"Inserir item...\" ng-model=\"$metaDetalheCtrl.data.item.recursosJaTenho\"></st-string-chip><p>Quais recursos eu preciso para realização da meta</p><st-string-chip placeholder=\"Inserir item...\" ng-model=\"$metaDetalheCtrl.data.item.recursosNaoTenho\"></st-string-chip><p>Mentores</p><st-string-chip placeholder=\"Inserir item...\" ng-model=\"$metaDetalheCtrl.data.item.mentores\"></st-string-chip></md-content></md-tab><md-tab label=\"Hábito\"><md-content class=\"md-padding\"><p>Quais hábitos devo adotar para realização da meta?</p><st-check-list attr-label=\"titulo\" attr=\"_string.ok\" crud-options=\"{objectName: 'Habito', fixProperties: {'meta.id':$metaDetalheCtrl.data.item.id }}\"></st-check-list></md-content></md-tab><md-tab label=\"Sprint\" ng-if=\"$metaDetalheCtrl.data.item.id\"><sprint-list fix-properties=\"{'meta.id':$metaDetalheCtrl.data.item.id}\"></sprint-list></md-tab></md-tabs></st-detalhe>"
  );


  $templateCache.put('app/meta/html/metaForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><input-string icon=\"list\" flex=\"70\" label=\"Título\" ng-model=\"$metaDetalheCtrl.data.item._string.titulo\"></input-string><input-date icon=\"calendar\" flex=\"100\" label=\"Onde?\" ng-model=\"$metaDetalheCtrl.data.item._string.onde\"></input-date><input-date icon=\"calendar\" flex=\"100\" label=\"Quando?\" ng-model=\"$metaDetalheCtrl.data.item._string.quando\"></input-date><input-date icon=\"calendar\" flex=\"100\" label=\"Com quem?\" ng-model=\"$metaDetalheCtrl.data.item._string.comQuem\"></input-date><input-date icon=\"calendar\" flex=\"100\" label=\"Como sua vida será afetada?\" ng-model=\"$metaDetalheCtrl.data.item._string.comoAfetaraVida\"></input-date><md-input-container flex=\"50\"><md-select ng-model=\"$metaDetalheCtrl.data.item.prioridade\" placeholder=\"Prioridade\"><md-option ng-value=\"1\">Prioridade baixa</md-option><md-option ng-value=\"2\">Prioridade média</md-option><md-option ng-value=\"3\">Prioridade alta</md-option></md-select></md-input-container></div>"
  );


  $templateCache.put('app/meta/html/metaGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"50\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $metaListCtrl.data.objetos\"><st-grid-item icon=\"list\" item=\"item\" label=\"{{item._string.titulo}}\" delete-function=\"$metaListCtrl.data.deleteFunction([item.id])\" open-detail=\"$metaListCtrl.data.openDetail(item.id)\"><md-card><md-card-content><ng-md-icon icon=\"list\"></ng-md-icon>MT-{{item.id}}</md-card-content></md-card></st-grid-item></div></div>"
  );


  $templateCache.put('app/meta/html/metaList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\" ng-hide=\"$metaListCtrl.hideFilter==true\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$metaListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$metaListCtrl.data.requestListParams\" get-list=\"$metaListCtrl.data.getList\" filtros=\"$metaListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add ng-hide=\"$metaListCtrl.hideButtonAdd==true\" class=\"float-add-button\" tooltip-label=\"Cadastrar novo meta\" ng-click=\"$metaListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$metaListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$metaListCtrl.data.deleteFunction($metaListCtrl.data.getSelectedItemsIds())\" selected-items=\"$metaListCtrl.data.selectedItems\"></st-selected-items-actions><meta-table-view></meta-table-view><div ng-if=\"$metaListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination ng-hide=\"$metaListCtrl.hidePagination==true\" total-itens=\"$metaListCtrl.data.totalItens\" itens-in-page=\"$metaListCtrl.data.objetos.length\" get-list=\"$metaListCtrl.data.getList\" query-options=\"$metaListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/meta/html/metaTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$metaListCtrl.data.tableColumns\" label=\"$metaListCtrl.data.changeAttr\" open-detail=\"$metaListCtrl.data.openDetail\" order-by=\"$metaListCtrl.data.orderBy\" delete-function=\"$metaListCtrl.data.deleteFunction\" selected-items=\"$metaListCtrl.data.selectedItems\" items=\"$metaListCtrl.data.objetos\" edit-column=\"$metaListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/metascumpridas/html/metascumpridasList.html',
    "<meta charset=\"UTF-8\"><md-card><md-card-title layout=\"column\" layout-align=\"center center\"><h2 flex><ng-md-icon md-colors=\"{color: 'green'}\" icon=\"star\"></ng-md-icon>Últimas metas cumpridas</h2><md-subheader class=\"md-no-sticky\">Você já alcançou {{$metascumpridasListCtrl.data.objetos.length}} metas! Excelente trabalho!</md-subheader></md-card-title><md-card-content layout=\"column\" layout-align=\"center center\"><md-list><md-list-item ng-repeat=\"meta in $metascumpridasListCtrl.data.objetos\"><ng-md-icon md-colors=\"{color: 'orange'}\" icon=\"check_circle\"></ng-md-icon><p md-truncate>{{meta.titulo}}</p><md-button class=\"md-primary\">{{meta.dataQueFoiAlcancada|date: 'dd/MM/yyyy'}}</md-button><md-button class=\"md-warn\">{{meta.daysSinceAlcancada}} dias</md-button><span flex></span><md-divider></md-divider></md-list-item></md-list></md-card-content></md-card>"
  );


  $templateCache.put('app/metrica/html/metricaDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$metricaDetalheCtrl.data.saveFunction($metricaDetalheCtrl.data.item)\" delete-function=\"$metricaDetalheCtrl.data.deleteFunction($metricaDetalheCtrl.data.item)\" item=\"$metricaDetalheCtrl.data.item\" cancel-function=\"$metricaDetalheCtrl.data.cancelFunction()\" loading=\"$metricaDetalheCtrl.data.loading\" title=\"{{$metricaDetalheCtrl.data.item._string.nome || 'Cadastro de novo Item'}}\"><metrica-form></metrica-form></st-detalhe>"
  );


  $templateCache.put('app/metrica/html/metricaForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"30\" flex-xs=\"100\" label=\"Descrição\" ng-model=\"$metricaDetalheCtrl.data.item.descricao\"></st-input-string><md-divider></md-divider><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Unidade (Ex: Horas)\" ng-model=\"$metricaDetalheCtrl.data.item.unidade\"></st-input-string></div>"
  );


  $templateCache.put('app/metrica/html/metricaList.html',
    "<meta charset=\"UTF-8\" />\r" +
    "\n" +
    "<div layout=\"row\">\r" +
    "\n" +
    "  <st-nav active-tab=\"$metricaListCtrl.tab\"  tabs=\"[{label:'Métricas'}, {label:'Métricas submetidas'}]\" </st-nav>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ng-show=\"$metricaListCtrl.tab==0\">\r" +
    "\n" +
    "	<md-card style=\"padding-top: 15px;\">\r" +
    "\n" +
    "	        <md-toolbar class=\"md-table-toolbar md-default\">\r" +
    "\n" +
    "		          <div layout=\"row\" class=\"md-toolbar-tools\"  layout-wrap>\r" +
    "\n" +
    "			           <div flex=\"20\"  hide-xs md-hide-xs>\r" +
    "\n" +
    "						   <md-button class=\"add-button md-raised\" ng-click=\"$metricaListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button>\r" +
    "\n" +
    "				       </div>\r" +
    "\n" +
    "					   <st-filter  \r" +
    "\n" +
    "					         flex-xs=\"80\" \r" +
    "\n" +
    "					         flex=\"60\"\r" +
    "\n" +
    "							 query-options = \"$metricaListCtrl.data.requestListParams\"\r" +
    "\n" +
    "							 get-list = \"$metricaListCtrl.data.getList\"\r" +
    "\n" +
    "							 filtros=\"$metricaListCtrl.data.filtros\"\r" +
    "\n" +
    "							>\r" +
    "\n" +
    "					   </st-filter>\r" +
    "\n" +
    "		   			<view-chose flex=\"10\" view-type=\"config.confs.viewType\" ></view-chose>\r" +
    "\n" +
    "		          </div>\r" +
    "\n" +
    "	         </md-toolbar>\r" +
    "\n" +
    "	</md-card>\r" +
    "\n" +
    "	\r" +
    "\n" +
    "		<float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo metrica\" ng-click=\"$metricaListCtrl.data.openDetail()\" ></float-button-add>\r" +
    "\n" +
    "		<div layout=\"row\" style=\"margin:8px\">\r" +
    "\n" +
    "		    <md-progress-linear\r" +
    "\n" +
    "		          flex\r" +
    "\n" +
    "		          ng-if=\"$metricaListCtrl.data.loading===true\"\r" +
    "\n" +
    "		          md-mode=\"indeterminate\">\r" +
    "\n" +
    "		    </md-progress-linear>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "		\r" +
    "\n" +
    "		<st-selected-items-actions \r" +
    "\n" +
    "		   delete-function=\"$metricaListCtrl.data.deleteFunction($metricaListCtrl.data.getSelectedItemsIds())\" \r" +
    "\n" +
    "		   selected-items=\"$metricaListCtrl.data.selectedItems\">\r" +
    "\n" +
    "		</st-selected-items-actions>\r" +
    "\n" +
    "		<meta charset=\"UTF-8\" />\r" +
    "\n" +
    "		\r" +
    "\n" +
    "		<div layout=\"row\"  layout-wrap flex >\r" +
    "\n" +
    "		   <div flex=\"33\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $metricaListCtrl.data.objetos\" >\r" +
    "\n" +
    "		       <st-grid-item\r" +
    "\n" +
    "		          icon=\"\" \r" +
    "\n" +
    "		          item=\"item\" \r" +
    "\n" +
    "		          label=\"{{'#' + item.id +'-'+ item.descricao}}\"\r" +
    "\n" +
    "		          delete-function=\"$metricaListCtrl.data.deleteFunction([item.id])\" \r" +
    "\n" +
    "		          open-detail=\"$metricaListCtrl.data.openDetail(item)\">\r" +
    "\n" +
    "		          <div layout=\"row\">\r" +
    "\n" +
    "		             <st-input-date ng-model=\"item.submitedDate\" label=\"Data\"></st-input-date>\r" +
    "\n" +
    "		             <st-input-string ng-model=\"item.value\" label=\"Valor ({{item.unidade}})\"></st-input-string>\r" +
    "\n" +
    "		             <md-button ng-click=\"$metricaListCtrl.submitMetric(item)\" class=\"md-primary md-raised\">OK</md-button>\r" +
    "\n" +
    "		          </div>\r" +
    "\n" +
    "		       </st-grid-item>\r" +
    "\n" +
    "			  </div>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "	 \r" +
    "\n" +
    "		\r" +
    "\n" +
    "		<div ng-if=\"$metricaListCtrl.data.objetos.length==0\">\r" +
    "\n" +
    "		    <p class=\"text-muted\">Nenhum item encontrado</p>\r" +
    "\n" +
    "	    </div>\r" +
    "\n" +
    "	   \r" +
    "\n" +
    "	    <st-filter-pagination\r" +
    "\n" +
    "		     total-itens=\"$metricaListCtrl.data.totalItens\" \r" +
    "\n" +
    "		     itens-in-page=\"$metricaListCtrl.data.objetos.length\" \r" +
    "\n" +
    "		     get-list=\"$metricaListCtrl.data.getList\" \r" +
    "\n" +
    "		     query-options=\"$metricaListCtrl.data.requestListParams\"  >\r" +
    "\n" +
    "	    </st-filter-pagination>\r" +
    "\n" +
    " </div>\r" +
    "\n" +
    " <div  ng-if=\"$metricaListCtrl.tab==1\">\r" +
    "\n" +
    "      <metricasubmit-list></metricasubmit-list>\r" +
    "\n" +
    " </div>\r" +
    "\n"
  );


  $templateCache.put('app/metricasubmit/html/metricasubmitDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$metricasubmitDetalheCtrl.data.saveFunction($metricasubmitDetalheCtrl.data.item)\" delete-function=\"$metricasubmitDetalheCtrl.data.deleteFunction($metricasubmitDetalheCtrl.data.item)\" item=\"$metricasubmitDetalheCtrl.data.item\" cancel-function=\"$metricasubmitDetalheCtrl.data.cancelFunction()\" loading=\"$metricasubmitDetalheCtrl.data.loading\" title=\"{{$metricasubmitDetalheCtrl.data.item._string.nome || 'Cadastro de novo Item'}}\"><metricasubmit-form></metricasubmit-form></st-detalhe>"
  );


  $templateCache.put('app/metricasubmit/html/metricasubmitForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Nome do metricasubmit\" ng-model=\"$metricasubmitDetalheCtrl.data.item._string.nome\"></st-input-string><md-divider></md-divider><st-input-string flex=\"30\" flex-xs=\"100\" label=\"Atributo 2\" ng-model=\"$metricasubmitDetalheCtrl.data.item._string.atributo2\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 3\" ng-model=\"$metricasubmitDetalheCtrl.data.item._string.atributo3\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 4\" ng-model=\"$metricasubmitDetalheCtrl.data.item._string.atributo4\"></st-input-string><md-divider></md-divider><st-input-double flex=\"20\" flex-xs=\"100\" label=\"Preço da hora\" ng-model=\"$metricasubmitDetalheCtrl.data.item._double.precoHora\"></st-input-double></div>"
  );


  $templateCache.put('app/metricasubmit/html/metricasubmitGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $metricasubmitListCtrl.data.objetos\"><st-grid-item icon=\"person\" item=\"item\" label=\"{{item._string.nome}}\" delete-function=\"$metricasubmitListCtrl.data.deleteFunction([item.id])\" open-detail=\"$metricasubmitListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/metricasubmit/html/metricasubmitList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$metricasubmitListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$metricasubmitListCtrl.data.requestListParams\" get-list=\"$metricasubmitListCtrl.data.getList\" filtros=\"$metricasubmitListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo metricasubmit\" ng-click=\"$metricasubmitListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$metricasubmitListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$metricasubmitListCtrl.data.deleteFunction($metricasubmitListCtrl.data.getSelectedItemsIds())\" selected-items=\"$metricasubmitListCtrl.data.selectedItems\"></st-selected-items-actions><metricasubmit-grid-view ng-show=\"config.confs.viewType=='grid'\"></metricasubmit-grid-view><metricasubmit-table-view ng-show=\"config.confs.viewType=='table'\"></metricasubmit-table-view><div ng-if=\"$metricasubmitListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$metricasubmitListCtrl.data.totalItens\" itens-in-page=\"$metricasubmitListCtrl.data.objetos.length\" get-list=\"$metricasubmitListCtrl.data.getList\" query-options=\"$metricasubmitListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/metricasubmit/html/metricasubmitTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$metricasubmitListCtrl.data.tableColumns\" open-detail=\"$metricasubmitListCtrl.data.openDetail\" order-by=\"$metricasubmitListCtrl.data.orderBy\" delete-function=\"$metricasubmitListCtrl.data.deleteFunction\" selected-items=\"$metricasubmitListCtrl.data.selectedItems\" items=\"$metricasubmitListCtrl.data.objetos\" edit-column=\"$metricasubmitListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/missao/html/missaoDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$missaoDetalheCtrl.data.saveFunction($missaoDetalheCtrl.data.item)\" delete-function=\"$missaoDetalheCtrl.data.deleteFunction($missaoDetalheCtrl.data.item)\" item=\"$missaoDetalheCtrl.data.item\" cancel-function=\"$missaoDetalheCtrl.data.cancelFunction()\" loading=\"$missaoDetalheCtrl.data.loading\" title=\"{{$missaoDetalheCtrl.data.item._string.titulo || 'Cadastro de novo Item'}}\"><missao-form></missao-form></st-detalhe>"
  );


  $templateCache.put('app/missao/html/missaoForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><md-input-container class=\"md-block\"><label>Descrição</label><textarea ng-model=\"$missaoDetalheCtrl.data.item.descricao\" rows=\"30\" md-select-on-focus></textarea></md-input-container></div>"
  );


  $templateCache.put('app/missao/html/missaoGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-align=\"center\" layout-wrap flex><div flex=\"70\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $missaoListCtrl.data.objetos\"><st-grid-item icon=\"person\" item=\"item\" label=\"{{item._string.titulo}}\" delete-function=\"$missaoListCtrl.data.deleteFunction([item.id])\" open-detail=\"$missaoListCtrl.data.openDetail(item)\"><html-compile html=\"item.descricao\"></html-compile></st-grid-item></div></div>"
  );


  $templateCache.put('app/missao/html/missaoList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$missaoListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$missaoListCtrl.data.requestListParams\" get-list=\"$missaoListCtrl.data.getList\" filtros=\"$missaoListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo missao\" ng-click=\"$missaoListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$missaoListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$missaoListCtrl.data.deleteFunction($missaoListCtrl.data.getSelectedItemsIds())\" selected-items=\"$missaoListCtrl.data.selectedItems\"></st-selected-items-actions><missao-grid-view ng-show=\"config.confs.viewType=='grid'\"></missao-grid-view><missao-table-view ng-show=\"config.confs.viewType=='table'\"></missao-table-view><div ng-if=\"$missaoListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$missaoListCtrl.data.totalItens\" itens-in-page=\"$missaoListCtrl.data.objetos.length\" get-list=\"$missaoListCtrl.data.getList\" query-options=\"$missaoListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/missao/html/missaoTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$missaoListCtrl.data.tableColumns\" label=\"$missaoListCtrl.data.changeAttr\" open-detail=\"$missaoListCtrl.data.openDetail\" order-by=\"$missaoListCtrl.data.orderBy\" delete-function=\"$missaoListCtrl.data.deleteFunction\" selected-items=\"$missaoListCtrl.data.selectedItems\" items=\"$missaoListCtrl.data.objetos\" edit-column=\"$missaoListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/papel/html/papelDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$papelDetalheCtrl.data.saveFunction($papelDetalheCtrl.data.item)\" delete-function=\"$papelDetalheCtrl.data.deleteFunction($papelDetalheCtrl.data.item)\" item=\"$papelDetalheCtrl.data.item\" cancel-function=\"$papelDetalheCtrl.data.cancelFunction()\" loading=\"$papelDetalheCtrl.data.loading\" title=\"{{$papelDetalheCtrl.data.item.descricao|| 'Cadastro de novo Item'}}\"><papel-form></papel-form></st-detalhe>"
  );


  $templateCache.put('app/papel/html/papelForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Descrição do papel do papel\" ng-model=\"$papelDetalheCtrl.data.item.descricao\"></st-input-string></div>"
  );


  $templateCache.put('app/papel/html/papelGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $papelListCtrl.data.objetos\"><st-grid-item icon=\"attach_file\" item=\"item\" label=\"{{'#'+item.id+' - '+item.descricao}}\" delete-function=\"$papelListCtrl.data.deleteFunction([item.id])\" open-detail=\"$papelListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/papel/html/papelList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$papelListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$papelListCtrl.data.requestListParams\" get-list=\"$papelListCtrl.data.getList\" filtros=\"$papelListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo papel\" ng-click=\"$papelListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$papelListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$papelListCtrl.data.deleteFunction($papelListCtrl.data.getSelectedItemsIds())\" selected-items=\"$papelListCtrl.data.selectedItems\"></st-selected-items-actions><papel-grid-view ng-show=\"config.confs.viewType=='grid'\"></papel-grid-view><papel-table-view ng-show=\"config.confs.viewType=='table'\"></papel-table-view><div ng-if=\"$papelListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$papelListCtrl.data.totalItens\" itens-in-page=\"$papelListCtrl.data.objetos.length\" get-list=\"$papelListCtrl.data.getList\" query-options=\"$papelListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/papel/html/papelTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$papelListCtrl.data.tableColumns\" label=\"$papelListCtrl.data.changeAttr\" open-detail=\"$papelListCtrl.data.openDetail\" order-by=\"$papelListCtrl.data.orderBy\" delete-function=\"$papelListCtrl.data.deleteFunction\" selected-items=\"$papelListCtrl.data.selectedItems\" items=\"$papelListCtrl.data.objetos\" edit-column=\"$papelListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/proscontras/html/proscontrasDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$proscontrasDetalheCtrl.data.saveFunction($proscontrasDetalheCtrl.data.item)\" delete-function=\"$proscontrasDetalheCtrl.data.deleteFunction($proscontrasDetalheCtrl.data.item)\" item=\"$proscontrasDetalheCtrl.data.item\" cancel-function=\"$proscontrasDetalheCtrl.data.cancelFunction()\" loading=\"$proscontrasDetalheCtrl.data.loading\" title=\"{{$proscontrasDetalheCtrl.data.item.titulo || 'Cadastro de novo Item'}}\"><proscontras-form></proscontras-form><div layout=\"row\" ng-if=\"$proscontrasDetalheCtrl.data.item.id\" layout-align=\"center start\"><md-card flex><md-card-title md-colors=\"{'background-color': 'teal'}\"><h3><ng-md-icon icon=\"thumb_up\"></ng-md-icon>Prós ({{ $proscontrasDetalheCtrl.pros.length }})</h3><md-divider></md-divider></md-card-title><md-card-content><st-check-list objetos=\"$proscontrasDetalheCtrl.pros\" attr-label=\"titulo\" attr=\"ok\" crud-options=\"{objectName: 'ProsContrasItem', fixProperties: {tipo: 1, 'proscontras.id': $proscontrasDetalheCtrl.data.item.id }}\"></st-check-list></md-card-content></md-card><md-card flex><md-card-title md-colors=\"{'background-color': 'red'}\"><h3><ng-md-icon icon=\"thumb_down\"></ng-md-icon>Contras ({{ $proscontrasDetalheCtrl.contras.length }})</h3><md-divider></md-divider></md-card-title><md-card-content><st-check-list objetos=\"$proscontrasDetalheCtrl.contras\" attr-label=\"titulo\" attr=\"ok\" crud-options=\"{objectName: 'ProsContrasItem', fixProperties: {tipo: 2, 'proscontras.id': $proscontrasDetalheCtrl.data.item.id }}\"></st-check-list></md-card-content></md-card></div></st-detalhe>"
  );


  $templateCache.put('app/proscontras/html/proscontrasForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Tìtulo\" ng-model=\"$proscontrasDetalheCtrl.data.item.titulo\"></st-input-string></div>"
  );


  $templateCache.put('app/proscontras/html/proscontrasGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $proscontrasListCtrl.data.objetos\"><st-grid-item icon=\"thumbs_up_down\" item=\"item\" label=\"{{item.titulo}}\" delete-function=\"$proscontrasListCtrl.data.deleteFunction([item.id])\" open-detail=\"$proscontrasListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/proscontras/html/proscontrasList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$proscontrasListCtrl.data.openDetail()\"><ng-md-icon icon=\"add\"></ng-md-icon>Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$proscontrasListCtrl.data.requestListParams\" get-list=\"$proscontrasListCtrl.data.getList\" filtros=\"$proscontrasListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo proscontras\" ng-click=\"$proscontrasListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$proscontrasListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$proscontrasListCtrl.data.deleteFunction($proscontrasListCtrl.data.getSelectedItemsIds())\" selected-items=\"$proscontrasListCtrl.data.selectedItems\"></st-selected-items-actions><proscontras-grid-view ng-show=\"config.confs.viewType=='grid'\"></proscontras-grid-view><proscontras-table-view ng-show=\"config.confs.viewType=='table'\"></proscontras-table-view><div ng-if=\"$proscontrasListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$proscontrasListCtrl.data.totalItens\" itens-in-page=\"$proscontrasListCtrl.data.objetos.length\" get-list=\"$proscontrasListCtrl.data.getList\" query-options=\"$proscontrasListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/proscontras/html/proscontrasTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$proscontrasListCtrl.data.tableColumns\" open-detail=\"$proscontrasListCtrl.data.openDetail\" order-by=\"$proscontrasListCtrl.data.orderBy\" delete-function=\"$proscontrasListCtrl.data.deleteFunction\" selected-items=\"$proscontrasListCtrl.data.selectedItems\" items=\"$proscontrasListCtrl.data.objetos\" edit-column=\"$proscontrasListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/relatorio/html/relatorioDetalhe.html',
    "<meta charset=\"UTF-8\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "<st-detalhe\r" +
    "\n" +
    "	   save-function =\"$relatorioDetalheCtrl.data.saveFunction($relatorioDetalheCtrl.data.item)\"\r" +
    "\n" +
    "	   delete-function = \"$relatorioDetalheCtrl.data.deleteFunction($relatorioDetalheCtrl.data.item)\"\r" +
    "\n" +
    "	   item = \"$relatorioDetalheCtrl.data.item\"\r" +
    "\n" +
    "	   cancel-function = \"$relatorioDetalheCtrl.data.cancelFunction()\"\r" +
    "\n" +
    "	   loading = \"$relatorioDetalheCtrl.data.loading\"\r" +
    "\n" +
    "	   title  = \"{{$relatorioDetalheCtrl.data.item.descricao || 'Cadastro de novo Item'}}\">\r" +
    "\n" +
    "	    <div layout=\"row\">\r" +
    "\n" +
    "		  <st-nav active-tab=\"$relatorioDetalheCtrl.tab\"  tabs=\"[{label:'Detalhes'}, {label:'Visualização'}]\" </st-nav>\r" +
    "\n" +
    "	    </div>\r" +
    "\n" +
    "	    \r" +
    "\n" +
    "	    <md-content ng-show=\"$relatorioDetalheCtrl.tab==0\" class=\"md-padding\">\r" +
    "\n" +
    "             <relatorio-form></relatorio-form>\r" +
    "\n" +
    "        </md-content>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <md-content layout-align=\"center center\" layout=\"row\" ng-if=\"$relatorioDetalheCtrl.tab==1\" class=\"md-padding\">\r" +
    "\n" +
    "             <span flex></span>\r" +
    "\n" +
    "             <div flex=\"90\">\r" +
    "\n" +
    "	             <st-chart \r" +
    "\n" +
    "	            	 label-filter=\"{{$relatorioDetalheCtrl.data.item.labelFilter}}\"\r" +
    "\n" +
    "	                 de=\"'1991-05-01'\" \r" +
    "\n" +
    "	                 ate=\"'3000-05-02'\" \r" +
    "\n" +
    "	                 order-by=\"{{$relatorioDetalheCtrl.data.item.orderBy}}\"\r" +
    "\n" +
    "	                 querys = \"$relatorioDetalheCtrl.data.item.querys\"\r" +
    "\n" +
    "	                 max = \"{{$relatorioDetalheCtrl.data.item.max}}\"\r" +
    "\n" +
    "	                 value-column=\"{{$relatorioDetalheCtrl.data.item.valueColumn}}\"\r" +
    "\n" +
    "	                 label-column=\"{{$relatorioDetalheCtrl.data.item.labelColumn}}\"\r" +
    "\n" +
    "	                 period-column=\"{{$relatorioDetalheCtrl.data.item.periodColumn}}\"\r" +
    "\n" +
    "	                 object-name=\"{{$relatorioDetalheCtrl.data.item.objectName}}\"\r" +
    "\n" +
    "	                ></st-chart>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <span flex></span>\r" +
    "\n" +
    "              \r" +
    "\n" +
    "        </md-content>\r" +
    "\n" +
    "           \r" +
    "\n" +
    "	   \r" +
    "\n" +
    "</st-detalhe>\r" +
    "\n"
  );


  $templateCache.put('app/relatorio/html/relatorioForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><div flex=\"50\" flex-xs=\"100\"><md-checkbox ng-true-value=\"1\" ng-false-value=\"0\" ng-model=\"$relatorioDetalheCtrl.data.item.exibirNaPaginaInicial\">Exibir na página inicial</md-checkbox></div><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Descrição do relatorio\" ng-model=\"$relatorioDetalheCtrl.data.item.descricao\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Objeto\" ng-model=\"$relatorioDetalheCtrl.data.item.objectName\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Order By\" ng-model=\"$relatorioDetalheCtrl.data.item.orderBy\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Filtro de label\" ng-model=\"$relatorioDetalheCtrl.data.item.labelFilter\"></st-input-string><st-input-string flex=\"100\" flex-xs=\"100\" label=\"Querys\" ng-model=\"$relatorioDetalheCtrl.data.item.querys\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Value Column\" ng-model=\"$relatorioDetalheCtrl.data.item.valueColumn\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Label Column\" ng-model=\"$relatorioDetalheCtrl.data.item.labelColumn\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Period Column\" ng-model=\"$relatorioDetalheCtrl.data.item.periodColumn\"></st-input-string><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Max\" ng-model=\"$relatorioDetalheCtrl.data.item.max\"></st-input-string></div>"
  );


  $templateCache.put('app/relatorio/html/relatorioGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"33\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $relatorioListCtrl.data.objetos\"><st-grid-item icon=\"show_chart\" item=\"item\" label=\"{{item.descricao}}\" delete-function=\"$relatorioListCtrl.data.deleteFunction([item.id])\" open-detail=\"$relatorioListCtrl.data.openDetail(item)\"><st-chart label-filter=\"{{item.labelFilter}}\" de=\"'1991-05-01'\" ate=\"'3000-05-02'\" order-by=\"{{item.orderBy}}\" querys=\"item.querys\" max=\"{{item.max}}\" value-column=\"{{item.valueColumn}}\" label-column=\"{{item.labelColumn}}\" period-column=\"{{item.periodColumn}}\" object-name=\"{{item.objectName}}\"></st-chart></st-grid-item></div></div>"
  );


  $templateCache.put('app/relatorio/html/relatorioList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$relatorioListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$relatorioListCtrl.data.requestListParams\" get-list=\"$relatorioListCtrl.data.getList\" filtros=\"$relatorioListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo relatorio\" ng-click=\"$relatorioListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$relatorioListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$relatorioListCtrl.data.deleteFunction($relatorioListCtrl.data.getSelectedItemsIds())\" selected-items=\"$relatorioListCtrl.data.selectedItems\"></st-selected-items-actions><relatorio-grid-view></relatorio-grid-view><div ng-if=\"$relatorioListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$relatorioListCtrl.data.totalItens\" itens-in-page=\"$relatorioListCtrl.data.objetos.length\" get-list=\"$relatorioListCtrl.data.getList\" query-options=\"$relatorioListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/relatorio/html/relatorioTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$relatorioListCtrl.data.tableColumns\" open-detail=\"$relatorioListCtrl.data.openDetail\" order-by=\"$relatorioListCtrl.data.orderBy\" delete-function=\"$relatorioListCtrl.data.deleteFunction\" selected-items=\"$relatorioListCtrl.data.selectedItems\" items=\"$relatorioListCtrl.data.objetos\" edit-column=\"$relatorioListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/ritual/html/ritualDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$ritualDetalheCtrl.data.saveFunction($ritualDetalheCtrl.data.item)\" delete-function=\"$ritualDetalheCtrl.data.deleteFunction($ritualDetalheCtrl.data.item)\" item=\"$ritualDetalheCtrl.data.item\" cancel-function=\"$ritualDetalheCtrl.data.cancelFunction()\" loading=\"$ritualDetalheCtrl.data.loading\" title=\"{{$ritualDetalheCtrl.data.item.titulo|| 'Cadastro de novo Item'}}\"><ritual-form></ritual-form></st-detalhe>"
  );


  $templateCache.put('app/ritual/html/ritualForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Nome do ritual\" ng-model=\"$ritualDetalheCtrl.data.item.titulo\"></st-input-string><p flex=\"100\">Ações</p><st-check-list flex=\"100\" ng-if=\"$ritualDetalheCtrl.data.item.id\" attr-label=\"titulo\" attr=\"ok\" crud-options=\"{objectName: 'RitualItem', fixProperties: {'ritual.id':$ritualDetalheCtrl.data.item.id }}\"></st-check-list></div>"
  );


  $templateCache.put('app/ritual/html/ritualGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $ritualListCtrl.data.objetos\"><st-grid-item icon=\"view_list\" item=\"item\" label=\"{{item.titulo}}\" delete-function=\"$ritualListCtrl.data.deleteFunction([item.id])\" open-detail=\"$ritualListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/ritual/html/ritualList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$ritualListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$ritualListCtrl.data.requestListParams\" get-list=\"$ritualListCtrl.data.getList\" filtros=\"$ritualListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo ritual\" ng-click=\"$ritualListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$ritualListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$ritualListCtrl.data.deleteFunction($ritualListCtrl.data.getSelectedItemsIds())\" selected-items=\"$ritualListCtrl.data.selectedItems\"></st-selected-items-actions><ritual-grid-view ng-show=\"config.confs.viewType=='grid'\"></ritual-grid-view><ritual-table-view ng-show=\"config.confs.viewType=='table'\"></ritual-table-view><div ng-if=\"$ritualListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$ritualListCtrl.data.totalItens\" itens-in-page=\"$ritualListCtrl.data.objetos.length\" get-list=\"$ritualListCtrl.data.getList\" query-options=\"$ritualListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/ritual/html/ritualTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$ritualListCtrl.data.tableColumns\" open-detail=\"$ritualListCtrl.data.openDetail\" order-by=\"$ritualListCtrl.data.orderBy\" delete-function=\"$ritualListCtrl.data.deleteFunction\" selected-items=\"$ritualListCtrl.data.selectedItems\" items=\"$ritualListCtrl.data.objetos\" edit-column=\"$ritualListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/ritualitem/html/ritualitemDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$ritualitemDetalheCtrl.data.saveFunction($ritualitemDetalheCtrl.data.item)\" delete-function=\"$ritualitemDetalheCtrl.data.deleteFunction($ritualitemDetalheCtrl.data.item)\" item=\"$ritualitemDetalheCtrl.data.item\" cancel-function=\"$ritualitemDetalheCtrl.data.cancelFunction()\" loading=\"$ritualitemDetalheCtrl.data.loading\" title=\"{{$ritualitemDetalheCtrl.data.item._string.nome || 'Cadastro de novo Item'}}\"><ritualitem-form></ritualitem-form></st-detalhe>"
  );


  $templateCache.put('app/ritualitem/html/ritualitemForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Nome do ritualitem\" ng-model=\"$ritualitemDetalheCtrl.data.item._string.nome\"></st-input-string><md-divider></md-divider><st-input-string flex=\"30\" flex-xs=\"100\" label=\"Atributo 2\" ng-model=\"$ritualitemDetalheCtrl.data.item._string.atributo2\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 3\" ng-model=\"$ritualitemDetalheCtrl.data.item._string.atributo3\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 4\" ng-model=\"$ritualitemDetalheCtrl.data.item._string.atributo4\"></st-input-string><md-divider></md-divider><st-input-double flex=\"20\" flex-xs=\"100\" label=\"Preço da hora\" ng-model=\"$ritualitemDetalheCtrl.data.item._double.precoHora\"></st-input-double></div>"
  );


  $templateCache.put('app/ritualitem/html/ritualitemGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $ritualitemListCtrl.data.objetos\"><st-grid-item icon=\"person\" item=\"item\" label=\"{{item._string.nome}}\" delete-function=\"$ritualitemListCtrl.data.deleteFunction([item.id])\" open-detail=\"$ritualitemListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/ritualitem/html/ritualitemList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$ritualitemListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$ritualitemListCtrl.data.requestListParams\" get-list=\"$ritualitemListCtrl.data.getList\" filtros=\"$ritualitemListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo ritualitem\" ng-click=\"$ritualitemListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$ritualitemListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$ritualitemListCtrl.data.deleteFunction($ritualitemListCtrl.data.getSelectedItemsIds())\" selected-items=\"$ritualitemListCtrl.data.selectedItems\"></st-selected-items-actions><ritualitem-grid-view ng-show=\"config.confs.viewType=='grid'\"></ritualitem-grid-view><ritualitem-table-view ng-show=\"config.confs.viewType=='table'\"></ritualitem-table-view><div ng-if=\"$ritualitemListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$ritualitemListCtrl.data.totalItens\" itens-in-page=\"$ritualitemListCtrl.data.objetos.length\" get-list=\"$ritualitemListCtrl.data.getList\" query-options=\"$ritualitemListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/ritualitem/html/ritualitemTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$ritualitemListCtrl.data.tableColumns\" open-detail=\"$ritualitemListCtrl.data.openDetail\" order-by=\"$ritualitemListCtrl.data.orderBy\" delete-function=\"$ritualitemListCtrl.data.deleteFunction\" selected-items=\"$ritualitemListCtrl.data.selectedItems\" items=\"$ritualitemListCtrl.data.objetos\" edit-column=\"$ritualitemListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/rodadavida/html/rodadavidaDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$rodadavidaDetalheCtrl.data.saveFunction($rodadavidaDetalheCtrl.data.item)\" delete-function=\"$rodadavidaDetalheCtrl.data.deleteFunction($rodadavidaDetalheCtrl.data.item)\" item=\"$rodadavidaDetalheCtrl.data.item\" cancel-function=\"$rodadavidaDetalheCtrl.data.cancelFunction()\" loading=\"$rodadavidaDetalheCtrl.data.loading\" title=\"{{$rodadavidaDetalheCtrl.data.item._string.nome || 'Cadastro de novo Item'}}\"><div layout=\"row\"><p>Em uma escala de 1 a 10, como está sua vida nas seguintes áreas?</p></div><rodadavida-form></rodadavida-form></st-detalhe>"
  );


  $templateCache.put('app/rodadavida/html/rodadavidaForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\"><st-input-string label=\"Área de alavancagem\" ng-model=\"$rodadavidaDetalheCtrl.data.item._string.areaAlavancagem\"></st-input-string><st-input-string label=\"Área de emergência\" ng-model=\"$rodadavidaDetalheCtrl.data.item._string.areaEmergencia\"></st-input-string><st-input-string label=\"Área de inspiração\" ng-model=\"$rodadavidaDetalheCtrl.data.item._string.areaInspiracao\"></st-input-string></div><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-int label=\"Lazer\" ng-model=\"$rodadavidaDetalheCtrl.data.item.metricas.Lazer\"></st-input-int><st-input-int label=\"Financeira\" ng-model=\"$rodadavidaDetalheCtrl.data.item.metricas.Financeira\"></st-input-int><st-input-int label=\"Profissional\" ng-model=\"$rodadavidaDetalheCtrl.data.item.metricas.Profissional\"></st-input-int><st-input-int label=\"Intelectual\" ng-model=\"$rodadavidaDetalheCtrl.data.item.metricas.Intelectual\"></st-input-int><st-input-int label=\"Emocional\" ng-model=\"$rodadavidaDetalheCtrl.data.item.metricas.Emocional\"></st-input-int><st-input-int label=\"Espiritual\" ng-model=\"$rodadavidaDetalheCtrl.data.item.metricas.Espiritual\"></st-input-int><st-input-int label=\"Física\" ng-model=\"$rodadavidaDetalheCtrl.data.item.metricas['Física']\"></st-input-int><st-input-int label=\"Relacionamento íntimo\" ng-model=\"$rodadavidaDetalheCtrl.data.item.metricas['Relacionamento Íntimo']\"></st-input-int><st-input-int label=\"Relacionamento Social\" ng-model=\"$rodadavidaDetalheCtrl.data.item.metricas['Relacionamento Social']\"></st-input-int><st-input-int label=\"Relacionamento Familiar\" ng-model=\"$rodadavidaDetalheCtrl.data.item.metricas['Relacionamento Familiar']\"></st-input-int></div>"
  );


  $templateCache.put('app/rodadavida/html/rodadavidaList.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\"><md-card flex><md-card-content><div layout=\"row\" layout-align=\"center center\"><h2><ng-md-icon md-colors=\"{color: 'green'}\" icon=\"account_circle\"></ng-md-icon>Roda da vida</h2></div><div layout=\"row\"><canvas chart-colors=\"$rodadavidaListCtrl.chart.colors\" flex id=\"polar-area\" class=\"chart chart-polar-area\" chart-data=\"$rodadavidaListCtrl.chart.data\" chart-labels=\"$rodadavidaListCtrl.chart.labels\" chart-options=\"$rodadavidaListCtrl.chart.options\"></canvas><md-divider></md-divider></div><div flex><md-list><md-list-item><ng-md-icon md-colors=\"{color: 'blue'}\" icon=\"trending_up\"></ng-md-icon><p>{{$rodadavidaListCtrl.rodaDaVida._string.areaAlavancagem}}</p></md-list-item><md-list-item><ng-md-icon md-colors=\"{color: 'orange'}\" icon=\"warning\"></ng-md-icon><p>{{$rodadavidaListCtrl.rodaDaVida._string.areaEmergencia}}</p></md-list-item><md-list-item><ng-md-icon md-colors=\"{color: 'red'}\" icon=\"favorite\"></ng-md-icon><p>{{$rodadavidaListCtrl.rodaDaVida._string.areaInspiracao}}</p></md-list-item></md-list></div><div layout=\"row\" layout-align=\"end center\"><md-button ng-click=\"$rodadavidaListCtrl.data.openDetail($rodadavidaListCtrl.rodaDaVida)\" class=\"md-primary md-raised\">Editar</md-button></div></md-card-content></md-card></div>"
  );


  $templateCache.put('app/sprint/html/sprintDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$sprintDetalheCtrl.data.saveFunction($sprintDetalheCtrl.data.item)\" delete-function=\"$sprintDetalheCtrl.data.deleteFunction($sprintDetalheCtrl.data.item)\" item=\"$sprintDetalheCtrl.data.item\" cancel-function=\"$sprintDetalheCtrl.data.cancelFunction()\" loading=\"$sprintDetalheCtrl.data.loading\" title=\"{{$sprintDetalheCtrl.data.item.titulo || 'Cadastro de novo Item'}}\"><sprint-form></sprint-form></st-detalhe>"
  );


  $templateCache.put('app/sprint/html/sprintForm.html',
    "<meta charset=\"UTF-8\"><md-tabs md-dynamic-height md-border-bottom><md-tab label=\"Sumário\"><md-content layout=\"row\" layout-padding><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Título\" ng-model=\"$sprintDetalheCtrl.data.item.titulo\"></st-input-string><st-input-date flex=\"50\" flex-xs=\"100\" label=\"Início\" ng-model=\"$sprintDetalheCtrl.data.item.inicio\"></st-input-date><st-input-date flex=\"50\" flex-xs=\"100\" label=\"Fim\" ng-model=\"$sprintDetalheCtrl.data.item.fim\"></st-input-date><div flex=\"50\" flex-xs=\"100\"><md-checkbox ng-change=\"$sprintDetalheCtrl.data.saveFunction($sprintDetalheCtrl.data.item)\" ng-true-value=\"'true'\" ng-false-value=\"'false'\" ng-model=\"$sprintDetalheCtrl.data.item._string.finalizada\">Finalizada</md-checkbox></div></md-content></md-tab><md-tab label=\"Kanban\"><md-content layout=\"row\" layout-padding><md-card layout=\"column\" flex=\"33\" style=\"border-left: 3px solid #3f51b5\"><h4><ng-md-icon md-colors=\"{color: 'primary'}\" icon=\"format_list_numbered\"></ng-md-icon>TAREFAS [{{$sprintDetalheCtrl.tarefasTodo.length}}]</h4><md-divider></md-divider><md-card-content><st-check-list attr-label=\"titulo\" objetos=\"$sprintDetalheCtrl.tarefasTodo\" show-border-no-items=\"true\" hide-checkbox=\"true\" hide-delete-all=\"true\" crud-options=\"{objectName: 'TarefaSprint', fixProperties: {'sprint.id': $sprintDetalheCtrl.data.item.id, status: 'todo'}}\"></st-check-list></md-card-content></md-card><md-card layout=\"column\" flex=\"33\" style=\"border-left: 3px solid orange\"><h4><ng-md-icon md-colors=\"{color: 'orange'}\" icon=\"access_time\"></ng-md-icon>FAZENDO [{{$sprintDetalheCtrl.tarefasDo.length}}]</h4><md-divider></md-divider><md-card-content><st-check-list objetos=\"$sprintDetalheCtrl.tarefasDo\" attr-label=\"titulo\" hide-delete-all=\"true\" show-border-no-items=\"true\" hide-add=\"true\" hide-checkbox=\"true\" crud-options=\"{objectName: 'TarefaSprint', fixProperties: {'sprint.id': $sprintDetalheCtrl.data.item.id, status: 'do'}}\"></st-check-list></md-card-content></md-card><md-card layout=\"column\" flex=\"33\" style=\"border-left: 3px solid green\"><h4><ng-md-icon md-colors=\"{color: 'green'}\" icon=\"playlist_add_check\"></ng-md-icon>FEITO [{{$sprintDetalheCtrl.tarefasTodo.length}}]</h4><md-divider></md-divider><md-card-content><st-check-list objetos=\"$sprintDetalheCtrl.tarefasDone\" attr-label=\"titulo\" hide-delete-all=\"true\" show-border-no-items=\"true\" hide-checkbox=\"true\" hide-add=\"true\" crud-options=\"{objectName: 'TarefaSprint', fixProperties: {'sprint.id': $sprintDetalheCtrl.data.item.id, status: 'done'}}\"></st-check-list></md-card-content></md-card></md-content></md-tab></md-tabs>"
  );


  $templateCache.put('app/sprint/html/sprintGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $sprintListCtrl.data.objetos\"><st-grid-item icon=\"list\" item=\"item\" label=\"{{item.titulo}}\" delete-function=\"$sprintListCtrl.data.deleteFunction([item.id])\" open-detail=\"$sprintListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/sprint/html/sprintList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\" ng-hide=\"$sprintListCtrl.hideFilter==true\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$sprintListCtrl.data.openDetail()\"><ng-md-icon icon=\"add\"></ng-md-icon>Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$sprintListCtrl.data.requestListParams\" get-list=\"$sprintListCtrl.data.getList\" filtros=\"$sprintListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add ng-hide=\"$sprintListCtrl.hideButtonAdd==true\" class=\"float-add-button\" tooltip-label=\"Cadastrar novo sprint\" ng-click=\"$sprintListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$sprintListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$sprintListCtrl.data.deleteFunction($sprintListCtrl.data.getSelectedItemsIds())\" selected-items=\"$sprintListCtrl.data.selectedItems\"></st-selected-items-actions><sprint-table-view></sprint-table-view><div ng-if=\"$sprintListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination ng-hide=\"$sprintListCtrl.hidePagination==true\" total-itens=\"$sprintListCtrl.data.totalItens\" itens-in-page=\"$sprintListCtrl.data.objetos.length\" get-list=\"$sprintListCtrl.data.getList\" query-options=\"$sprintListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/sprint/html/sprintRoute.html',
    "<meta charset=\"UTF-8\"><md-tabs md-dynamic-height md-border-bottom><md-tab label=\"Em execução\"><md-content layout=\"column\" layout-padding><sprint-list hide-filter=\"true\" hide-button-add=\"true\" fix-querys=\"['current_date() between inicio and fim', '_string[\\'finalizada\\']  <> \\'true\\'']\"></sprint-list></md-content></md-tab><md-tab label=\"Todas as sprint's\"><md-content layout=\"column\" layout-padding><sprint-list></sprint-list></md-content></md-tab></md-tabs>"
  );


  $templateCache.put('app/sprint/html/sprintTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$sprintListCtrl.data.tableColumns\" open-detail=\"$sprintListCtrl.data.openDetail\" order-by=\"$sprintListCtrl.data.orderBy\" delete-function=\"$sprintListCtrl.data.deleteFunction\" selected-items=\"$sprintListCtrl.data.selectedItems\" items=\"$sprintListCtrl.data.objetos\" edit-column=\"$sprintListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/step/html/stepDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$stepDetalheCtrl.data.saveFunction($stepDetalheCtrl.data.item)\" delete-function=\"$stepDetalheCtrl.data.deleteFunction($stepDetalheCtrl.data.item)\" item=\"$stepDetalheCtrl.data.item\" cancel-function=\"$stepDetalheCtrl.data.cancelFunction()\" loading=\"$stepDetalheCtrl.data.loading\" title=\"{{$stepDetalheCtrl.data.item.titulo || 'Cadastro de novo Item'}}\"><step-form></step-form></st-detalhe>"
  );


  $templateCache.put('app/step/html/stepForm.html',
    "<meta charset=\"UTF-8\"><md-tabs md-dynamic-height md-border-bottom><md-tab label=\"Informações\"><md-content class=\"md-padding\"><st-input-string label=\"Título\" ng-model=\"$stepDetalheCtrl.data.item.titulo\"></st-input-string><st-auto-complete label=\"Step Descriptor\" get-complete-object=\"true\" placeholder=\"Step Descriptor\" object-name=\"StepDescriptor\" attr=\"titulo\" , ng-change=\"$stepDetalheCtrl.changeStepDescriptor($stepDetalheCtrl.data.item.stepDescriptor)\" ng-model=\"$stepDetalheCtrl.data.item.stepDescriptor\" initial-busca=\"\" extra-class=\"input-lg\" label-cad=\"Cadastrar novo\" place-holder-busca=\"\"></st-auto-complete><st-check-list objetos=\"$stepDetalheCtrl.steps\" ng-if=\"$stepDetalheCtrl.data.item.id\" attr-label=\"titulo\" attr=\"ok\" crud-options=\"{objectName: 'StepItem', fixProperties: {'step.id': $stepDetalheCtrl.data.item.id}}\"></st-check-list></md-content></md-tab><md-tab label=\"Steps\" ng-if=\"$stepDetalheCtrl.steps.length>0\"><md-content class=\"md-padding\"><md-tabs><md-tab label=\"[{{$index+1}}] {{step.titulo}}\" ng-repeat=\"step in $stepDetalheCtrl.steps | orderBy: 'orderIndex'\"><md-content class=\"md-padding\" layout=\"row\"><div flex=\"50\" simditor ng-model=\"step.content\"></div><div flex=\"50\" style=\"max-height: 500px;padding-left: 9px;overflow-y:scroll\" html-compile html=\"step.descricao\"></div></md-content></md-tab></md-tabs></md-content></md-tab><md-tab label=\"Resumo\"><md-content class=\"md-padding\" layout=\"row\" layout-wrap><div layout=\"column\" flex layout-fill ng-cloak><md-content style=\"max-height:700px\" md-theme=\"altTheme\"><section ng-repeat=\"step in $stepDetalheCtrl.steps| orderBy: 'orderIndex'\" layout=\"column\"><md-subheader class=\"md-primary\">{{$index+1}} - {{step.titulo}}</md-subheader><div class=\"md-padding\" html-compile html=\"step.content\"></div><md-divider></md-divider></section></md-content></div></md-content></md-tab></md-tabs>"
  );


  $templateCache.put('app/step/html/stepGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $stepListCtrl.data.objetos\"><st-grid-item icon=\"format_list_numbered\" item=\"item\" label=\"{{item.titulo}}\" delete-function=\"$stepListCtrl.data.deleteFunction([item.id])\" open-detail=\"$stepListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/step/html/stepList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$stepListCtrl.data.openDetail()\"><ng-md-icon icon=\"add\"></ng-md-icon>Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$stepListCtrl.data.requestListParams\" get-list=\"$stepListCtrl.data.getList\" filtros=\"$stepListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo step\" ng-click=\"$stepListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$stepListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$stepListCtrl.data.deleteFunction($stepListCtrl.data.getSelectedItemsIds())\" selected-items=\"$stepListCtrl.data.selectedItems\"></st-selected-items-actions><step-grid-view ng-show=\"config.confs.viewType=='grid'\"></step-grid-view><step-table-view ng-show=\"config.confs.viewType=='table'\"></step-table-view><div ng-if=\"$stepListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$stepListCtrl.data.totalItens\" itens-in-page=\"$stepListCtrl.data.objetos.length\" get-list=\"$stepListCtrl.data.getList\" query-options=\"$stepListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/step/html/stepRoute.html',
    "<meta charset=\"UTF-8\"><md-tabs md-dynamic-height md-border-bottom><md-tab label=\"Steps\"><md-content><step-list></step-list></md-content></md-tab><md-tab label=\"Descriptors\"><md-content><stepdescriptor-list></stepdescriptor-list></md-content></md-tab></md-tabs>"
  );


  $templateCache.put('app/step/html/stepTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$stepListCtrl.data.tableColumns\" open-detail=\"$stepListCtrl.data.openDetail\" order-by=\"$stepListCtrl.data.orderBy\" delete-function=\"$stepListCtrl.data.deleteFunction\" selected-items=\"$stepListCtrl.data.selectedItems\" items=\"$stepListCtrl.data.objetos\" edit-column=\"$stepListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/stepdescriptor/html/stepdescriptorDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$stepdescriptorDetalheCtrl.data.saveFunction($stepdescriptorDetalheCtrl.data.item)\" delete-function=\"$stepdescriptorDetalheCtrl.data.deleteFunction($stepdescriptorDetalheCtrl.data.item)\" item=\"$stepdescriptorDetalheCtrl.data.item\" cancel-function=\"$stepdescriptorDetalheCtrl.data.cancelFunction()\" loading=\"$stepdescriptorDetalheCtrl.data.loading\" title=\"{{$stepdescriptorDetalheCtrl.data.item.titulo || 'Cadastro de novo Item'}}\"><stepdescriptor-form></stepdescriptor-form></st-detalhe>"
  );


  $templateCache.put('app/stepdescriptor/html/stepdescriptorForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><md-tabs flex md-dynamic-height md-border-bottom><md-tab label=\"Informações\"><md-content class=\"md-padding\" layout=\"row\" layout-wrap><st-input-string flex=\"100\" flex-xs=\"100\" label=\"Título\" ng-model=\"$stepdescriptorDetalheCtrl.data.item.titulo\"></st-input-string></md-content></md-tab><md-tab label=\"Ordenação e cadastro de itens\" ng-if=\"$stepdescriptorDetalheCtrl.data.item.id\"><st-check-list objetos=\"$stepdescriptorDetalheCtrl.data.stepItems\" ng-if=\"$stepdescriptorDetalheCtrl.data.item.id\" attr-label=\"titulo\" attr=\"_string.ok\" crud-options=\"{objectName: 'StepItem', fixProperties: {'stepDescriptor.id': $stepdescriptorDetalheCtrl.data.item.id}}\"></st-check-list></md-tab><md-tab label=\"Detalhamento de itens\" ng-if=\"$stepdescriptorDetalheCtrl.data.stepItems.length>0\"><md-subheader class=\"md-no-sticky\">Editar detalhes de cada etapa</md-subheader><md-tabs md-dynamic-height md-border-bottom><md-tab label=\"{{step.titulo}}\" ng-repeat=\"step in $stepdescriptorDetalheCtrl.data.stepItems\"><md-content class=\"md-padding\" layout=\"column\"><md-button ng-click=\"$stepdescriptorDetalheCtrl.data.saveStepItem(step)\" class=\"md-primary md-raised\">Salvar</md-button><st-input-string flex label=\"Título\" ng-model=\"step.titulo\"></st-input-string><div simditor ng-model=\"step.descricao\"></div></md-content></md-tab></md-tabs></md-tab></md-tabs></div>"
  );


  $templateCache.put('app/stepdescriptor/html/stepdescriptorGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $stepdescriptorListCtrl.data.objetos\"><st-grid-item icon=\"format_list_numbered\" item=\"item\" label=\"{{item.titulo}}\" delete-function=\"$stepdescriptorListCtrl.data.deleteFunction([item.id])\" open-detail=\"$stepdescriptorListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/stepdescriptor/html/stepdescriptorList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$stepdescriptorListCtrl.data.openDetail()\"><ng-md-icon icon=\"add\"></ng-md-icon>Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$stepdescriptorListCtrl.data.requestListParams\" get-list=\"$stepdescriptorListCtrl.data.getList\" filtros=\"$stepdescriptorListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo stepdescriptor\" ng-click=\"$stepdescriptorListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$stepdescriptorListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$stepdescriptorListCtrl.data.deleteFunction($stepdescriptorListCtrl.data.getSelectedItemsIds())\" selected-items=\"$stepdescriptorListCtrl.data.selectedItems\"></st-selected-items-actions><stepdescriptor-grid-view ng-show=\"config.confs.viewType=='grid'\"></stepdescriptor-grid-view><stepdescriptor-table-view ng-show=\"config.confs.viewType=='table'\"></stepdescriptor-table-view><div ng-if=\"$stepdescriptorListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$stepdescriptorListCtrl.data.totalItens\" itens-in-page=\"$stepdescriptorListCtrl.data.objetos.length\" get-list=\"$stepdescriptorListCtrl.data.getList\" query-options=\"$stepdescriptorListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/stepdescriptor/html/stepdescriptorTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$stepdescriptorListCtrl.data.tableColumns\" open-detail=\"$stepdescriptorListCtrl.data.openDetail\" order-by=\"$stepdescriptorListCtrl.data.orderBy\" delete-function=\"$stepdescriptorListCtrl.data.deleteFunction\" selected-items=\"$stepdescriptorListCtrl.data.selectedItems\" items=\"$stepdescriptorListCtrl.data.objetos\" edit-column=\"$stepdescriptorListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/stepitem/html/stepitemDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$stepitemDetalheCtrl.data.saveFunction($stepitemDetalheCtrl.data.item)\" delete-function=\"$stepitemDetalheCtrl.data.deleteFunction($stepitemDetalheCtrl.data.item)\" item=\"$stepitemDetalheCtrl.data.item\" cancel-function=\"$stepitemDetalheCtrl.data.cancelFunction()\" loading=\"$stepitemDetalheCtrl.data.loading\" title=\"{{$stepitemDetalheCtrl.data.item.titulo || 'Cadastro de novo Item'}}\"><stepitem-form></stepitem-form></st-detalhe>"
  );


  $templateCache.put('app/stepitem/html/stepitemForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"100\" flex-xs=\"100\" label=\"Título\" ng-model=\"$stepitemDetalheCtrl.data.item.titulo\"></st-input-string><textarea flex=\"100\" ng-model=\"$stepitemDetalheCtrl.data.item.descricao\" rows=\"30\" md-select-on-focus></textarea></div>"
  );


  $templateCache.put('app/stepitem/html/stepitemGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $stepitemListCtrl.data.objetos\"><st-grid-item icon=\"format_list_numbered\" item=\"item\" label=\"{{item.titulo}}\" delete-function=\"$stepitemListCtrl.data.deleteFunction([item.id])\" open-detail=\"$stepitemListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/stepitem/html/stepitemList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$stepitemListCtrl.data.openDetail()\"><ng-md-icon icon=\"add\"></ng-md-icon>Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$stepitemListCtrl.data.requestListParams\" get-list=\"$stepitemListCtrl.data.getList\" filtros=\"$stepitemListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo stepitem\" ng-click=\"$stepitemListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$stepitemListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$stepitemListCtrl.data.deleteFunction($stepitemListCtrl.data.getSelectedItemsIds())\" selected-items=\"$stepitemListCtrl.data.selectedItems\"></st-selected-items-actions><stepitem-grid-view ng-show=\"config.confs.viewType=='grid'\"></stepitem-grid-view><stepitem-table-view ng-show=\"config.confs.viewType=='table'\"></stepitem-table-view><div ng-if=\"$stepitemListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$stepitemListCtrl.data.totalItens\" itens-in-page=\"$stepitemListCtrl.data.objetos.length\" get-list=\"$stepitemListCtrl.data.getList\" query-options=\"$stepitemListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/stepitem/html/stepitemTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$stepitemListCtrl.data.tableColumns\" open-detail=\"$stepitemListCtrl.data.openDetail\" order-by=\"$stepitemListCtrl.data.orderBy\" delete-function=\"$stepitemListCtrl.data.deleteFunction\" selected-items=\"$stepitemListCtrl.data.selectedItems\" items=\"$stepitemListCtrl.data.objetos\" edit-column=\"$stepitemListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/tarefasprint/html/tarefasprintDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$tarefasprintDetalheCtrl.data.saveFunction($tarefasprintDetalheCtrl.data.item)\" delete-function=\"$tarefasprintDetalheCtrl.data.deleteFunction($tarefasprintDetalheCtrl.data.item)\" item=\"$tarefasprintDetalheCtrl.data.item\" cancel-function=\"$tarefasprintDetalheCtrl.data.cancelFunction()\" loading=\"$tarefasprintDetalheCtrl.data.loading\" title=\"{{$tarefasprintDetalheCtrl.data.item.titulo || 'Cadastro de novo Item'}}\"><tarefasprint-form></tarefasprint-form></st-detalhe>"
  );


  $templateCache.put('app/tarefasprint/html/tarefasprintForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Título\" ng-model=\"$tarefasprintDetalheCtrl.data.item.titulo\"></st-input-string></div>"
  );


  $templateCache.put('app/tarefasprint/html/tarefasprintGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $tarefasprintListCtrl.data.objetos\"><st-grid-item icon=\"list\" item=\"item\" label=\"{{item.titulo}}\" delete-function=\"$tarefasprintListCtrl.data.deleteFunction([item.id])\" open-detail=\"$tarefasprintListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/tarefasprint/html/tarefasprintList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\" ng-hide=\"$metaListCtrl.hideFilter==true\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$tarefasprintListCtrl.data.openDetail()\"><ng-md-icon icon=\"add\"></ng-md-icon>Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$tarefasprintListCtrl.data.requestListParams\" get-list=\"$tarefasprintListCtrl.data.getList\" filtros=\"$tarefasprintListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add ng-hide=\"$metaListCtrl.hideButtonAdd==true\" class=\"float-add-button\" tooltip-label=\"Cadastrar novo tarefasprint\" ng-click=\"$tarefasprintListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$tarefasprintListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$tarefasprintListCtrl.data.deleteFunction($tarefasprintListCtrl.data.getSelectedItemsIds())\" selected-items=\"$tarefasprintListCtrl.data.selectedItems\"></st-selected-items-actions><tarefasprint-grid-view ng-show=\"config.confs.viewType=='grid'\"></tarefasprint-grid-view><tarefasprint-table-view ng-show=\"config.confs.viewType=='table'\"></tarefasprint-table-view><div ng-if=\"$tarefasprintListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination ng-hide=\"$metaListCtrl.hidePagination==true\" total-itens=\"$tarefasprintListCtrl.data.totalItens\" itens-in-page=\"$tarefasprintListCtrl.data.objetos.length\" get-list=\"$tarefasprintListCtrl.data.getList\" query-options=\"$tarefasprintListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/tarefasprint/html/tarefasprintTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$tarefasprintListCtrl.data.tableColumns\" open-detail=\"$tarefasprintListCtrl.data.openDetail\" order-by=\"$tarefasprintListCtrl.data.orderBy\" delete-function=\"$tarefasprintListCtrl.data.deleteFunction\" selected-items=\"$tarefasprintListCtrl.data.selectedItems\" items=\"$tarefasprintListCtrl.data.objetos\" edit-column=\"$tarefasprintListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/todaytask/html/todaytaskDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$todaytaskDetalheCtrl.data.saveFunction($todaytaskDetalheCtrl.data.item)\" delete-function=\"$todaytaskDetalheCtrl.data.deleteFunction($todaytaskDetalheCtrl.data.item)\" item=\"$todaytaskDetalheCtrl.data.item\" cancel-function=\"$todaytaskDetalheCtrl.data.cancelFunction()\" loading=\"$todaytaskDetalheCtrl.data.loading\" title=\"{{$todaytaskDetalheCtrl.data.item._string.nome || 'Cadastro de novo Item'}}\"><todaytask-form></todaytask-form></st-detalhe>"
  );


  $templateCache.put('app/todaytask/html/todaytaskForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Nome do todaytask\" ng-model=\"$todaytaskDetalheCtrl.data.item._string.nome\"></st-input-string><md-divider></md-divider><st-input-string flex=\"30\" flex-xs=\"100\" label=\"Atributo 2\" ng-model=\"$todaytaskDetalheCtrl.data.item._string.atributo2\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 3\" ng-model=\"$todaytaskDetalheCtrl.data.item._string.atributo3\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 4\" ng-model=\"$todaytaskDetalheCtrl.data.item._string.atributo4\"></st-input-string><md-divider></md-divider><st-input-double flex=\"20\" flex-xs=\"100\" label=\"Preço da hora\" ng-model=\"$todaytaskDetalheCtrl.data.item._double.precoHora\"></st-input-double></div>"
  );


  $templateCache.put('app/todaytask/html/todaytaskGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $todaytaskListCtrl.data.objetos\"><st-grid-item icon=\"person\" item=\"item\" label=\"{{item._string.nome}}\" delete-function=\"$todaytaskListCtrl.data.deleteFunction([item.id])\" open-detail=\"$todaytaskListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/todaytask/html/todaytaskList.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap layout-align=\"center start\"><div flex=\"45\"><div layout=\"column\"><md-card flex><md-card-title md-colors=\"{'background-color': 'red'}\"><h3 flex><ng-md-icon icon=\"format_list_numbered\"></ng-md-icon>Importante e Urgente</h3></md-card-title><md-card-content><md-divider></md-divider><st-check-list flex attr-label=\"titulo\" attr=\"ok\" crud-options=\"{objectName: 'TodayTask', fixProperties: {categoria: 0}}\"></st-check-list></md-card-content></md-card><md-card flex><md-card-title md-colors=\"{'background-color': 'teal'}\"><h3 flex><ng-md-icon icon=\"format_list_numbered\"></ng-md-icon>Não importante e Urgente</h3></md-card-title><md-card-content><md-divider></md-divider><st-check-list flex attr-label=\"titulo\" attr=\"ok\" crud-options=\"{objectName: 'TodayTask', fixProperties: {categoria: 2}}\"></st-check-list></md-card-content></md-card></div></div><div flex=\"45\"><div layout=\"column\"><md-card flex><md-card-title md-colors=\"{'background-color': 'amber'}\"><h3 flex><ng-md-icon icon=\"format_list_numbered\"></ng-md-icon>Importante e NÃO Urgente</h3></md-card-title><md-card-content><md-divider></md-divider><st-check-list flex attr-label=\"titulo\" attr=\"ok\" crud-options=\"{objectName: 'TodayTask', fixProperties: {categoria: 1}}\"></st-check-list></md-card-content></md-card><md-card flex><md-card-title md-colors=\"{'background-color': 'green'}\"><h3 flex><ng-md-icon icon=\"format_list_numbered\"></ng-md-icon>Não importante e Não Urgente</h3></md-card-title><md-card-content><md-divider></md-divider><st-check-list flex attr-label=\"titulo\" attr=\"ok\" crud-options=\"{objectName: 'TodayTask', fixProperties: {categoria: 3}}\"></st-check-list></md-card-content></md-card></div></div></div>"
  );


  $templateCache.put('app/todaytask/html/todaytaskTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$todaytaskListCtrl.data.tableColumns\" open-detail=\"$todaytaskListCtrl.data.openDetail\" order-by=\"$todaytaskListCtrl.data.orderBy\" delete-function=\"$todaytaskListCtrl.data.deleteFunction\" selected-items=\"$todaytaskListCtrl.data.selectedItems\" items=\"$todaytaskListCtrl.data.objetos\" edit-column=\"$todaytaskListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/trilha/html/trilhaDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$trilhaDetalheCtrl.data.saveFunction($trilhaDetalheCtrl.data.item)\" delete-function=\"$trilhaDetalheCtrl.data.deleteFunction($trilhaDetalheCtrl.data.item)\" item=\"$trilhaDetalheCtrl.data.item\" cancel-function=\"$trilhaDetalheCtrl.data.cancelFunction()\" loading=\"$trilhaDetalheCtrl.data.loading\" title=\"{{$trilhaDetalheCtrl.data.item._string.nome || 'Cadastro de novo Item'}}\"><trilha-form></trilha-form></st-detalhe>"
  );


  $templateCache.put('app/trilha/html/trilhaForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Nome do trilha\" ng-model=\"$trilhaDetalheCtrl.data.item._string.nome\"></st-input-string><md-divider></md-divider><st-input-string flex=\"30\" flex-xs=\"100\" label=\"Atributo 2\" ng-model=\"$trilhaDetalheCtrl.data.item._string.atributo2\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 3\" ng-model=\"$trilhaDetalheCtrl.data.item._string.atributo3\"></st-input-string><md-divider></md-divider><st-input-string flex=\"20\" flex-xs=\"100\" label=\"Atributo 4\" ng-model=\"$trilhaDetalheCtrl.data.item._string.atributo4\"></st-input-string><md-divider></md-divider><st-input-double flex=\"20\" flex-xs=\"100\" label=\"Preço da hora\" ng-model=\"$trilhaDetalheCtrl.data.item._double.precoHora\"></st-input-double></div>"
  );


  $templateCache.put('app/trilha/html/trilhaGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $trilhaListCtrl.data.objetos\"><st-grid-item icon=\"person\" item=\"item\" label=\"{{item._string.nome}}\" delete-function=\"$trilhaListCtrl.data.deleteFunction([item.id])\" open-detail=\"$trilhaListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/trilha/html/trilhaList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$trilhaListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$trilhaListCtrl.data.requestListParams\" get-list=\"$trilhaListCtrl.data.getList\" filtros=\"$trilhaListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo trilha\" ng-click=\"$trilhaListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$trilhaListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$trilhaListCtrl.data.deleteFunction($trilhaListCtrl.data.getSelectedItemsIds())\" selected-items=\"$trilhaListCtrl.data.selectedItems\"></st-selected-items-actions><trilha-grid-view ng-show=\"config.confs.viewType=='grid'\"></trilha-grid-view><trilha-table-view ng-show=\"config.confs.viewType=='table'\"></trilha-table-view><div ng-if=\"$trilhaListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$trilhaListCtrl.data.totalItens\" itens-in-page=\"$trilhaListCtrl.data.objetos.length\" get-list=\"$trilhaListCtrl.data.getList\" query-options=\"$trilhaListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/trilha/html/trilhaTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$trilhaListCtrl.data.tableColumns\" label=\"$trilhaListCtrl.data.changeAttr\" open-detail=\"$trilhaListCtrl.data.openDetail\" order-by=\"$trilhaListCtrl.data.orderBy\" delete-function=\"$trilhaListCtrl.data.deleteFunction\" selected-items=\"$trilhaListCtrl.data.selectedItems\" items=\"$trilhaListCtrl.data.objetos\" edit-column=\"$trilhaListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/valor/html/valorDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$valorDetalheCtrl.data.saveFunction($valorDetalheCtrl.data.item)\" delete-function=\"$valorDetalheCtrl.data.deleteFunction($valorDetalheCtrl.data.item)\" item=\"$valorDetalheCtrl.data.item\" cancel-function=\"$valorDetalheCtrl.data.cancelFunction()\" loading=\"$valorDetalheCtrl.data.loading\" title=\"{{$valorDetalheCtrl.data.item._string.nome || 'Cadastro de novo Item'}}\"><valor-form></valor-form></st-detalhe>"
  );


  $templateCache.put('app/valor/html/valorForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Descrição do valor\" ng-model=\"$valorDetalheCtrl.data.item._string.titulo\"></st-input-string></div>"
  );


  $templateCache.put('app/valor/html/valorGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $valorListCtrl.data.objetos\"><st-grid-item icon=\"person\" item=\"item\" label=\"{{item._string.titulo}}\" delete-function=\"$valorListCtrl.data.deleteFunction([item.id])\" open-detail=\"$valorListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/valor/html/valorList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$valorListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$valorListCtrl.data.requestListParams\" get-list=\"$valorListCtrl.data.getList\" filtros=\"$valorListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo valor\" ng-click=\"$valorListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$valorListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$valorListCtrl.data.deleteFunction($valorListCtrl.data.getSelectedItemsIds())\" selected-items=\"$valorListCtrl.data.selectedItems\"></st-selected-items-actions><valor-grid-view ng-show=\"config.confs.viewType=='grid'\"></valor-grid-view><valor-table-view ng-show=\"config.confs.viewType=='table'\"></valor-table-view><div ng-if=\"$valorListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$valorListCtrl.data.totalItens\" itens-in-page=\"$valorListCtrl.data.objetos.length\" get-list=\"$valorListCtrl.data.getList\" query-options=\"$valorListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/valor/html/valorTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$valorListCtrl.data.tableColumns\" label=\"$valorListCtrl.data.changeAttr\" open-detail=\"$valorListCtrl.data.openDetail\" order-by=\"$valorListCtrl.data.orderBy\" delete-function=\"$valorListCtrl.data.deleteFunction\" selected-items=\"$valorListCtrl.data.selectedItems\" items=\"$valorListCtrl.data.objetos\" edit-column=\"$valorListCtrl.data.editColumn\"></st-table>"
  );

}]);
