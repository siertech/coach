package missao;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

@Entity
@Table(name = "missao")
@Getter @Setter
public  class Missao extends CrudClass {

	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String descricao;

}
