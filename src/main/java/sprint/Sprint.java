package sprint;
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
@Table(name = "sprint")
@Getter @Setter
public  class Sprint extends CrudClass {

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String titulo;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String descricao;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String inicio;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String fim;
	
	@ManyToOne
	@JoinColumn(name="meta_id")
    @JsonView(Views.Public.class)
	private  Meta meta;

}
