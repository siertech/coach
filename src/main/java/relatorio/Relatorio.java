package relatorio;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

@Entity
@Table(name = "relatorio")
@Getter @Setter
public  class Relatorio extends CrudClass {
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String descricao;
	
	@JsonView(Views.Public.class)
	private int exibirNaPaginaInicial;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String orderBy;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String valueFilter;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String labelFilter;

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String querys;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String objectName;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String labelColumn;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String valueColumn;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String periodColumn;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String max;

}
