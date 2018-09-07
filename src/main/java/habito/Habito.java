package habito;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import meta.Meta;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

@Entity
@Table(name = "habito")
@Getter @Setter
public  class Habito extends CrudClass {

	@ManyToOne
	@JoinColumn(name="meta_habito_id")
    @JsonView(Views.Public.class)
	private  Meta meta;
	
	@JsonView(Views.Public.class)
	private String titulo;
	
	@JsonView(Views.Public.class)
	private String categoria;
	
	@JsonView(Views.Public.class)
	private String descricao;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String consequenciasCumprir;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String consequenciasNaoCumprir;
	
	@JsonView(Views.Public.class)
	private String diasSemana;

}
