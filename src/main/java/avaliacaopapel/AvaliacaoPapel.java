package avaliacaopapel;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;

@Entity
@Table(name = "avaliacaopapel")
@Getter @Setter
public  class AvaliacaoPapel extends CrudClass {

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String endereco;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String comentarios;
	
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String tipoPessoa;

}
