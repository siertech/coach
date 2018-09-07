package burndown;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import meta.Meta;
import metrica.Metrica;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

@Entity
@Table(name = "burndown")
@Getter @Setter
public  class BurnDown extends CrudClass {
	
	
	@ManyToOne
	@JoinColumn(name="burn_down_meta_id")
    @JsonView(Views.Public.class)
	private  Meta meta;
	
	@ManyToOne
	@JoinColumn(name="burn_down_metrica_id")
    @JsonView(Views.Public.class)
	private  Metrica metrica;

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String descricao;
	
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
	private String dataFim;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String valueMeta;
	
	

}
