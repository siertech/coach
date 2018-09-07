package frequenciasonora;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

@Entity
@Table(name = "frequenciasonora")
@Getter @Setter
public  class FrequenciaSonora extends CrudClass {
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String url;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String titulo;

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String tipo;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String efeitos;
	
}
